const Title = () => {
  return <h2>Onyx Storm</h2>
}
const Author = () => {
  return (
    <h4 style={{ color: '#617d98', fontSize: '0.75', marginTop: '0.5rem' }}>
      Rebecca Yarros
    </h4>
  )
}
const Image = () => {
  return <img src="./images/book-cover.jpg" alt="Onyx Storm" />
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
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
