import { useEffect, useState } from 'react'

const SecondComponent = () => {
  useEffect(() => {
    console.log('useEffect invoked')

    const intvID = setInterval(() => {
      console.log('Interval callback')
    }, 1000)

    return () => {
      clearInterval(intvID)
      console.log('Inside cleanup function')
    }
  }, [])

  return <p>Second Component Toggled</p>
}

const CleanupFunction = () => {
  const [value, setValue] = useState(false)

  useEffect(() => {
    console.log('First render of <CleanupFunction />')
  }, [])

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
