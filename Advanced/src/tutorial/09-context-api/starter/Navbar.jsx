import { createContext, useState } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

console.log(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: 'someUser123' })

  const logout = () => {
    setUser(null)
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h1>Navbar</h1>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar
