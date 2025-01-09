import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState(undefined)

  console.log(a, b)

  return (
    <>
      <h2>short circuit overview</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          if (a) {
            setA('')
          } else {
            setA('non empty')
          }
        }}
      >
        Toggle A
      </button>
      <br />
      <button
        type="button"
        className="btn"
        onClick={() => {
          if (b) {
            setB(0)
          } else {
            setB(-1)
          }
        }}
      >
        Toggle B
      </button>
      <br />
      OR: {a || b}
      <br />
      AND: {a && b}
    </>
  )
}
export default ShortCircuitOverview
