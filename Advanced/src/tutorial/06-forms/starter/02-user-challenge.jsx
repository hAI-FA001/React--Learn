import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault()
          if (!name) return
          const fakeID = Date.now()
          setPeople(people.concat([{ id: fakeID, name: name }]))
          setName('')
        }}
      >
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {people.map((p) => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <button
            type="button"
            className="btn"
            onClick={(e) => {
              setPeople(people.filter((p2) => p2.id != p.id))
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
export default UserChallenge
