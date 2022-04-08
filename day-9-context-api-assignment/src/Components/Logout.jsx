
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

function Logout() {

    
  const {handleToken,token,handleAuth}=useContext(AuthContext)

    const handlelogout=()=>{
        
      handleAuth(false)
      handleToken(null)
    }
  return (
    <div>

<div>User is already login and token is={token.token}</div>
<div>if you want to logout you can click LogOut button</div>
   <button onClick={handlelogout}>Logout</button>

    </div>
  )
}

export default Logout