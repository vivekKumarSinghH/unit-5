import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/Login/action'
import Profile from './Profile'
import Stats from './Stats'

export default function Sidebar({todos}) {
  
  const dispatch=useDispatch()
    return (
    <div className="border-black border-2 text-center">
    <Profile/>
<hr/>

<Stats todos={todos}/>

<hr/>

<hr/>

<button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}
