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
      <div className="meta">
        <div>
          {author && (<strong>{author.name}</strong>)}
          {(author && date) && <span> whatever </span>}
          {date && (<span><DateFormatter dateString={date} /></span>)}
          {author.picture}
        </div>
      </div>
    </>
  )
}

export default PostMeta;