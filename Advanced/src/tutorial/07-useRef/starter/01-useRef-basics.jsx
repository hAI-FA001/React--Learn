import { useEffect, useRef, useState } from 'react'

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false)

  console.log(refContainer)

  // after initial render, we can access input using refContainer
  useEffect(() => {
    console.log(refContainer)
  })

  useEffect(() => {
    console.log(isMounted)

    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    console.log('this is logged on re-render')
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(refContainer.current.value)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
