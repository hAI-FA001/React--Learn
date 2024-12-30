const Book = () => {
  const author = 'Rebecca Yarros'
  const title = 'Onyx Storm'
  return (
    <article className="book">
      <img src="./images/book-cover.jpg" alt="Onyx Storm" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

export const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
