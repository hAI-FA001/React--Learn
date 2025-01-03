import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('Read Books')

  return (
    <>
      <h2>useState Object Example</h2>
      <div>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Hobby: {hobby}</h4>
      </div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          // react will perform auto-batching
          setName('John')
          setAge(28)
          setHobby('Scream At The Computer')
        }}
      >
        Change Person
      </button>
    </>
  )
}

export default UseStateObject
