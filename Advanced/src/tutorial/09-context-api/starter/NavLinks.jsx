import UserContainer from './UserContainer'

const NavLinks = ({ user, logout }) => {
  return (
    <div>
      <h2>NavLinks</h2>
      <UserContainer user={user} logout={logout} />
    </div>
  )
}

export default NavLinks
