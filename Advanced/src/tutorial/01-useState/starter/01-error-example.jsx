const ErrorExample = () => {
  let count = 0
  return (
    <>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button
        type="button"
        className="btn"
        onClick={(e) => {
          count++
          console.log(count)
        }}
      >
        Increment
      </button>
    </>
  )
}

export default ErrorExample
