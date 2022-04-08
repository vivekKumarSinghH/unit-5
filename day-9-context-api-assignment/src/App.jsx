import { useContext, useState } from 'react'

import './App.css'
import Login from './Components/Login'
import Logout from './Components/Logout'
import { AuthContext } from './Contexts/AuthContext'

function App() {

  
  const {isAuth}=useContext(AuthContext)  
  return (
    <div className="App">
   
    {!isAuth?<Login/>:<Logout/>}
    </div>
  )
}

export default App
