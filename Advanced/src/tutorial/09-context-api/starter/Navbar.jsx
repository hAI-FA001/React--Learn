import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'someUser123' })

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <h1>Navbar</h1>
      <NavLinks user={user} logout={logout} />
    </div>
  )
}

export default Navbar
