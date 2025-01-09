import { useEffect, useState } from 'react'

const SecondComponent = () => {
  useEffect(() => {
    const scrollListener = () => {
      console.log('Scroll event')
    }
    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
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
