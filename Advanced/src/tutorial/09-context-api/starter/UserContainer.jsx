const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {/* <h3>UserContainer</h3> */}
      {(user && (
        <>
          <p>{user?.name}</p>
          <button type="button" className="btn" onClick={logout}>
            Log Out
          </button>
        </>
      )) || <p>Please Log In</p>}
    </div>
  )
}

export default UserContainer
