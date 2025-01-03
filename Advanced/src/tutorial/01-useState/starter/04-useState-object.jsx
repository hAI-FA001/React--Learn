import { useState } from 'react'

const UseStateObject = () => {
  // const [name, setName] = useState('Peter')
  // const [age, setAge] = useState(24)
  // const [hobby, setHobby] = useState('Read Books')
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read Books',
  })

  return (
    <>
      <h2>useState Object Example</h2>
      <div>
        <h4>Name: {person.name}</h4>
        <h4>Age: {person.age}</h4>
        <h4>Hobby: {person.hobby}</h4>
      </div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          // react will perform auto-batching
          // setName('John')
          // setAge(28)
          // setHobby('Scream At The Computer')

          // setPerson({ name: 'John', age: 28, hobby: 'Scream At The Computer' })
          setPerson({ ...person, name: 'Susan' })
        }}
      >
        Change Person
      </button>
    </>
  )
}

export default UseStateObject
