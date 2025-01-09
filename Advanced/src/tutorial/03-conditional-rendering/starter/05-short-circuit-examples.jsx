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
