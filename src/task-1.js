const Title = () => {
  return <h2>Onyx Storm</h2>
}
const Author = () => {
  return <h4>Rebecca Yarros</h4>
}
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg"
      alt="Onyx Storm"
    />
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

export const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
