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

          // setCount((prevCount) => {
          //   const newState = prevCount + 1
          //   return newState
          // })

          // setTimeout(() => {
          //   console.log('Clicked button')
          //   setCount(count + 1)
          // }, 3000)

          setTimeout(() => {
            console.log('Clicked button')
            setCount((curCount) => curCount + 1)
          }, 3000)
        }}
      >
        Increment
      </button>
    </>
  )
}

export default UseStateGotcha
