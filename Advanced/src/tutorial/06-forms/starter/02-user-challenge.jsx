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
          setPeople(people.concat([{ id: people.length + 1, name: name }]))
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
        <button
          type="button"
          className="btn btn-block"
          onClick={(e) => {
            setPeople(people.filter((p) => p.name != name))
          }}
        >
          delete
        </button>
      </form>
      {people.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  )
}
export default UserChallenge
