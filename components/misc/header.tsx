import Link from 'next/link'
import { useEffect, useState } from 'react';
import Search from './search';
import { useRouter } from 'next/router';

const Header = () => {
  const [top, setTop] = useState(true);
  const [searching, setSearching] = useState(false);
  const router = useRouter();
  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <nav className={router.pathname.includes('posts') ? 'navBar pink' : 'navBar'}>
      <ul className="navLinks">
        <li>
          <Link href="/">Marius</Link>
        </li>
        <li>
          <Link href="/info"> info</Link>
        </li>
      </ul>
    </nav>

    // <header className={`header transition ${!top && 'has-shadow'}`}>
    //   <Link href="/" className="block hover:underline" aria-label="Marius was here"> Marius was here </Link>
    //   <div><Search visible={searching} setVisible={setSearching}/>
    //     <button className="w-4 h-4 my-auto mx-2 border-black" aria-label="Search" onClick={() => setSearching(!searching)} disabled={searching}>SEARCH</button></div>
    // </header>
  )
}

export default Header