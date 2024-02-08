import Link from 'next/link'
import PreviewLink from "./preview-link"
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="siteFooter">
      {/* {router.pathname.includes('/posts') ? <Subscribe /> : ''} */}
      <ul className="navLinks">
        <li>
          <Link href="/">
            Marius
          </Link>
        </li>
        <li>
          <Link href="/info">
            info
          </Link>
        </li>
      </ul>
    </footer>
    
    // <footer className="footer">
    //   <strong> <PreviewLink href="/statically-generated">Statically Generated</PreviewLink> with Next.js.</strong>
    //   <a href={`https://github.com/matthewwong525/linked-blog-starter`} className="mx-3 font-bold hover:underline">View on GitHub</a>
    // </footer>
  )
}
export default Footer