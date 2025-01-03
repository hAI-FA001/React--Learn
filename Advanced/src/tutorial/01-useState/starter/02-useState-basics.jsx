import { useState } from 'react'

const UseStateBasics = () => {
  console.log(useState())
  console.log(useState('hello'))
  console.log(useState('hello')[0])
  console.log(useState('hello')[1])

  const [count, setCount] = useState(0)

  return (
    <>
      <h2>useState Basics</h2>
      <h3>{count}</h3>
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          setCount(count + 1)
          // setCount(count + count.toString()) // turns into different dtype
          console.log(count) // will show old value -> not synchronous behavior
        }}
      >
        Increment
      </button>
    </>
  )
}

export default UseStateBasics
