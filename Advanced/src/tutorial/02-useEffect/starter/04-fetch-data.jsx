import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(url).then(async (resp) => {
      resp = await resp.json()
      console.log(resp)
      setUsers(resp)
    })
  }, [])

  return (
    <>
      <h2>fetch data example</h2>
      {users.map((u) => (
        <div key={u.id}>
          <p>{u.login}</p>
          <img src={u.avatar_url} alt="" />
        </div>
      ))}
    </>
  )
}
export default FetchData
