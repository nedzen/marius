import Link from "next/link"
import type Author from '../../interfaces/author'
import PostMeta from "./post-meta"

type Props = {
  title: string
  date?: string
  excerpt: string
  author?: Author
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <article className="postpreview">
      <div>
        <header>
          <h2 className="h2">
            <Link as={`/${slug}`} href="/[...slug]" className="hover:underline">{title}</Link>
          </h2>
        </header>
        <div className="contentPreview">
          {excerpt.slice(0, 500)}
        </div>
        <footer className="sm">
          <PostMeta date={date} author={author} />
        </footer>
      </div>
      <Link as={`/${slug}`} href="/[...slug]" className="block">
        <span className="readmore">Read more</span>
      </Link>
    </article>
  )
}

export default PostPreview;