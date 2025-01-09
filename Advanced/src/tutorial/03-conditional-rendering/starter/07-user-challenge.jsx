import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: 'some user123' })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button type="button" className="btn" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button type="button" className="btn" onClick={login}>
            Log In
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge
