export const slowFunction = () => {
  let val = 0
  for (let i = 0; i <= 10_000_000_000; i++) {
    val += i
  }
  return val
}
