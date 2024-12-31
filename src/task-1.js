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

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(`HANDLE FORM INPUT: ${e}`)
    console.log(`Name: ${e.target.name}`)
    console.log(`Value: ${e.target.value}`)
  }
  return (
    <section>
      <form>
        <h2>Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            console.log(`Form Submission: ${e}`)
          }}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book, idx) =>
        idx % 2 === 0 ? (
          <Book key={book.id} {...book} />
        ) : (
          <Book key={book.id} {...book}>
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
