import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeSingleItem = (removeThis) => {
    // people.splice(
    //   people.findIndex((item) => item.id == removeThis.id),
    //   1
    // )
    // setPeople(people)
    setPeople(people.filter((item) => item.id !== removeThis.id))
  }

  const clearList = () => {
    setPeople([])
  }

  return (
    <>
      <h2>useState Array Example</h2>
      {people.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '25%',
            margin: '1rem auto',
          }}
        >
          <span>{item.name.toUpperCase()}</span>
          <button
            type="button"
            className="btn"
            onClick={() => removeSingleItem(item)}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        Clear List
      </button>
    </>
  )
}

export default UseStateArray
