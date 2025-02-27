import { useCallback, useMemo, useState } from 'react'
import { data } from '../../../../data'
import List from './List'
import { slowFunction } from './slowFunction'

const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  const removePerson = useCallback(
    (id) => {
      console.log(people)
      setPeople(people.filter((p) => p.id !== id))
    },
    [people]
  ) // pass people or it keeps using original array

  const val = useMemo(slowFunction, [])
  console.log(val)

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default LowerState
