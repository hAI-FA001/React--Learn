import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'someUser123' })

  const logout = () => {
    setUser(null)
  }

  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}

export default Navbar
