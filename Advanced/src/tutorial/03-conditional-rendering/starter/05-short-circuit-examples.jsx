import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <h2>short circuit - examples</h2>
      <h3>{text || 'a default value'}</h3>
      {text && (
        <div>
          <h3>{name}</h3>
        </div>
      )}

      {user && <SomeCompo {...user} />}

      <br />
      <br />
      <h2 style={{ margin: '1rem 0' }}>Ternary</h2>
      <button type="button" className="btn">
        {isEditing ? 'Edit' : 'Add'}
      </button>

      <br />
      <br />
      {user ? <h4>Hello, {user.name}</h4> : <h4>You Need To Log In</h4>}
    </>
  )
}

const SomeCompo = ({ name }) => (
  <div>
    <h2>Component</h2>
    <h3>{name}</h3>
  </div>
)

export default ShortCircuitExamples
