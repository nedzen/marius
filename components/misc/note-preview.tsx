type Props = {
  title: string
  content: string
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview">
      <strong className="note-title">{title}</strong>
      <span className="note-content">{content}</span>
    </span>
  )
}

export default NotePreview