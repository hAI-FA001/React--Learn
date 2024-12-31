import Book from './Book'
import { books } from './books'

export const BookList = () => {
  return (
    <section className="booklist">
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
