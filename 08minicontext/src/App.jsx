import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <UserContextProvider>
     
     <h1>Context api </h1>
     <Login />
     <Profile />
     
    
    </UserContextProvider>
    
  )
}

export default App
