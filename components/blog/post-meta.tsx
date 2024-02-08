import Author from "../../interfaces/author"
import DateFormatter from "../misc/date-formatter"

type Props = {
  author?: Author,
  date?: string,
}

const PostMeta = ({
  author,
  date
}: Props) => {
  if (!(author || date)) return null;
  return (
    <>
      <div className="flex items-center">
        {author && (
          <div className="flex shrink-0 mr-3">
            <a className="relative" href="#0">
              <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
              <img className="relative rounded-full" src={author.picture} width="32" height="32" alt="Author" />
            </a>
          </div>
        )}
        <div>
          {author && (
            <>
              <strong>{author.name}</strong>
            </>
          )}
          {(author && date) && <span> whatever </span>}
          {date && (<span><DateFormatter dateString={date} /></span>)}
        </div>
      </div>
    </>
  )
}

export default PostMeta;