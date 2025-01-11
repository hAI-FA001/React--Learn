import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const GlobalContext = createContext()
export const useAppContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [value, setValue] = useState('some value')
  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
