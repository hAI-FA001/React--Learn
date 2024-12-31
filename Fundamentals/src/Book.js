const Book = ({ img, title, author, number, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`#${number}`}</span>
      {children}
    </article>
  )
}

export default Book
