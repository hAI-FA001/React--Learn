const Book = () => {
  return (
    <article className="book">
      <img src="./images/book-cover.jpg" alt="Onyx Storm" />
      <h2>Onyx Storm</h2>
      <h4>Rebecca Yarros</h4>
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
