import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  const fetchData = async () => {
    try {
      const resp = await fetch(url)

      if (!resp.ok) {
        setIsError(true)
        return
      }

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
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (isError) {
    return <h1>Error occured</h1>
  } else {
    const { avatar_url, login, name, company, bio } = user
    return (
      <>
        <h2>Fetch Data</h2>
        <img
          src={avatar_url}
          style={{ width: '150px', borderRadius: '25px' }}
          alt={login}
        />
        <h3>{name}</h3>
        <h4>At {company}</h4>
        <p>{bio}</p>
      </>
    )
  }
}
export default MultipleReturnsFetchData
