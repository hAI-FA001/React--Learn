const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Onyx Storm',
    img: './images/book-cover.jpg',
  },

  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-cover-2.webp',
  },
]

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  )
}

export const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, idx) =>
        idx % 2 === 0 ? (
          <Book author={book.author} title={book.title} img={book.img} />
        ) : (
          <Book author={book.author} title={book.title} img={book.img}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              numquam necessitatibus accusantium eius quae magni, suscipit rem
              commodi facilis quidem est quis voluptatum hic tempore, in tenetur
              blanditiis ducimus asperiores.
            </p>
            <button>CLICK</button>
          </Book>
        )
      )}
    </section>
  )
}
