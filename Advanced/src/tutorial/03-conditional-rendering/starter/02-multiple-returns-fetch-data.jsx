import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const fetchedUser = await resp.json()
        console.log(fetchedUser)
        setUser(fetchedUser)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (isError) {
    return <h1>Error occured</h1>
  } else {
    return (
      <>
        <h2>Fetch Data</h2>
        <img
          src={user.avatar_url}
          style={{ width: '150px', borderRadius: '25px' }}
          alt={user.login}
        />
        <h3>{user.name}</h3>
        <h4>At {user.company}</h4>
        <p>{user.bio}</p>
      </>
    )
  }
}
export default MultipleReturnsFetchData
