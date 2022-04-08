import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

function Login() {

  const {handleToken,handleAuth}=useContext(AuthContext)
    const [data,setData]=useState({email:"",password:""})
 

    const handleChange=(e)=>{

        setData({...data,[e.target.id]:e.target.value}) 
    }

    const handlelogin=()=>{
        axios.post("https://reqres.in/api/login",data).then((res)=>{
     
        handleToken(res.data)
        handleAuth(true)
        })
        setData({email:"",password:""})
        
    }
  return (
    <div>
    <div>This is login page</div>
    <input placeholder="Enter you Email"    id="email" onChange={handleChange}  type="text"></input>
    <input placeholder="Enter you Password" id="password" onChange={handleChange} type="password"></input>
   <button onClick={handlelogin}>Login</button>

    </div>
  )
}

export default Login