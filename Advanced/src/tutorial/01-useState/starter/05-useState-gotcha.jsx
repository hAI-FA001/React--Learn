import { useState } from 'react'

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h4>State: {count}</h4>
      <button
        type="button"
        className="btn"
        onClick={() => {
          // setCount(count + 1)
          // console.log(count)

          setCount((prevCount) => {
            const newState = prevCount + 1
            return newState
          })
        }}
      >
        Increment
      </button>
    </>
  )
}

export default UseStateGotcha
