import { useState } from 'react'

const ToggleChallenge = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <h2>toggle challenge</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setState(!state)
        }}
      >
        Toggle State
      </button>

      <div>{state ? <MyCompo /> : 'State is False'}</div>
    </>
  )
}

const MyCompo = () => <h3>Rendered Component</h3>

export default ToggleChallenge
