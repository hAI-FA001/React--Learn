const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Onyx Storm',
    img: './images/book-cover.jpg',
    id: 1,
  },

  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-cover-2.webp',
    id: 2,
  },
]

const Book = ({ id, img, title, author, onClick, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => onClick(id)}>Display Book</button>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  )
}

export const BookList = () => {
  const getBook = (id) => {
    const book = books.find((b) => b.id === id)
    console.log(book)
  }

  return (
    <section className="booklist">
      {books.map((book, idx) =>
        idx % 2 === 0 ? (
          <Book key={book.id} {...book} onClick={getBook} />
        ) : (
          <Book key={book.id} {...book} onClick={getBook}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              numquam necessitatibus accusantium eius quae magni, suscipit rem
              commodi facilis quidem est quis voluptatum hic tempore, in tenetur
              blanditiis ducimus asperiores.
            </p>
            <button onClick={() => alert('CLICKED BUTTON')}>CLICK</button>
          </Book>
        )
      )}
    </section>
  )
}
