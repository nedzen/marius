import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="footer">
      <strong> <PreviewLink href="/statically-generated">Statically Generated</PreviewLink> with Next.js.</strong>
      <a href={`https://github.com/matthewwong525/linked-blog-starter`} className="mx-3 font-bold hover:underline">View on GitHub</a>
    </footer>
  )
}
export default Footer