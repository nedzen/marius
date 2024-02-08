import { useEffect, useRef, useState } from "react"
import PostPreview from "../blog/post-preview";
import { useRouter } from 'next/router'


function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event)
      }
    }
    // Bind the event listener
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
}

function Search({ visible, setVisible }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (visible) {
      inputRef.current?.focus();
    }
  }, [visible])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        setVisible(true);
      }
      if (e.key === 'Escape') {
        setVisible(false);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  }, [])

  useOutsideAlerter(containerRef, (e: MouseEvent) => {
    setVisible(false);
    e.stopPropagation();
  });

  useEffect(() => {
    setVisible(false);
  }, [router.asPath])


  async function handleChangeInput(e) {
    const res = await fetch(`/api/search?q=${e.target.value}`)
    setSearchResults(await res.json());
  }

  return (
    <div className={`absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-y-auto overscroll-none overflow-x-hidden bg-white/95 ${visible ? "block" : "hidden"}`}>
      <div ref={containerRef} className="max-w-4xl mx-auto flex flex-wrap mt-5 px-5">

        {/* Search Bar */}
        <div className="w-full">
          <label className="block text-sm sr-only" htmlFor="search">Search</label>
          <div className="relative flex items-center">
            <input ref={inputRef} id="search" type="search" className="form-input w-full text-gray-800 px-3 py-2 pl-10" placeholder="Search my notes" onChange={handleChangeInput}/>
            <button type="submit" className="absolute inset-0 right-auto" aria-label="Search">Search in searchbar</button>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.map((res) => (
          <PostPreview
            key={res.item.slug}
            title={res.item.title}
            excerpt={res.item.excerpt}
            slug={res.item.slug}
            date={res.item.date}
            author={res.item.author}
          />
        ))}
      </div>
    </div>
  )
}

export default Search