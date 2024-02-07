import Link from 'next/link'
import { useEffect, useState } from 'react';
import Search from './search';

const Header = () => {
  const [top, setTop] = useState(true);
  const [searching, setSearching] = useState(false);
  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`header transition ${!top && 'has-shadow'}`}>
      <Link href="/" className="block hover:underline" aria-label="Marius was here"> Marius was here </Link>
      <ul className="search">
        <li>
          <button className="w-4 h-4 my-auto mx-2 border-black" aria-label="Search" onClick={() => setSearching(!searching)} disabled={searching}>
            <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
            </svg>
          </button>
        </li>
        <li><Search visible={searching} setVisible={setSearching}/></li>
      </ul>
    </header>
  )
}

export default Header