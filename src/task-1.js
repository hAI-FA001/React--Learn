const firstBook = {
  author: 'Rebecca Yarros',
  title: 'Onyx Storm',
  img: './images/book-cover.jpg',
}

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-cover-2.webp',
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

export const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}
