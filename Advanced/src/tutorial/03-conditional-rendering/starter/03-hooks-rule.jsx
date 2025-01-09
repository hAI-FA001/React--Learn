import { useState, useEffect } from 'react'

const Example = () => {
  const [condition, setCondition] = useState(true)
  if (condition) {
    // won't work
    const [state, setState] = useState(false)
    console.log('MY STATE', state)
  }

  if (!condition) {
    return <h2>Hello There</h2>
  }
  // this will also fail
  useEffect(() => {
    console.log('hello there')
  }, [])
  return (
    <>
      <h2>example</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setCondition(!condition)
        }}
      >
        Toggle Condition
      </button>
      <br />
      <button
        type="button"
        className="btn"
        onClick={() => {
          setState(!state)
        }}
      >
        Toggle State
      </button>
    </>
  )
}

export default Example
