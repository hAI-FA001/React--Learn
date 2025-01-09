import { useEffect, useState } from 'react'

const SecondComponent = () => {
  useEffect(() => {
    console.log('useEffect invoked')
  }, [])

  return <p>Second Component Toggled</p>
}

const CleanupFunction = () => {
  const [value, setValue] = useState(true)

  return (
    <>
      <h2>cleanup function</h2>
      <button type="button" className="btn" onClick={() => setValue(!value)}>
        Toggle State
      </button>
      {value && <SecondComponent />}
    </>
  )
}

export default CleanupFunction
