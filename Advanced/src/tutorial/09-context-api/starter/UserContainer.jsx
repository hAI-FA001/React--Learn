const UserContainer = ({ user, logout }) => {
  return (
    <div>
      <h3>UserContainer</h3>
      <h4>{user?.name || 'Please Log In'}</h4>
      <button type="button" className="btn" onClick={logout}>
        Log Out
      </button>
    </div>
  )
}

export default UserContainer
