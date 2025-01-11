import { useCallback, useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  const fetchData = useCallback(
    () =>
      fetch(url).then(async (resp) => {
        resp = await resp.json()
        console.log(resp)
        setUsers(resp)
      }),
    []
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((u) => (
          <li key={u.id}>
            <img src={u.avatar_url} alt={u.login} />
            <div>
              <h5>{u.login}</h5>
              <a href={u.html_url}>View Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
export default FetchData
