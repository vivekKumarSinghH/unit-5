import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "../App.css"

export default function Signup() {
    const [userData,setUserData]=useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: "" 
      })

      const navigate=useNavigate()
      const handleChange=(e)=>{
          setUserData({...userData,[e.target.id]:e.target.value})
      }
  
      const handleSubmit=()=>{
   
        axios.post("https://masai-api-mocker.herokuapp.com/auth/register",userData).then((res)=>{console.log(res)
    navigate("/login")
    })
   
setUserData({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "" 
  })
    }

  return (
    <div className="formss">

  
    <input placeholder="Enter your name" id="name" type="text" onChange={handleChange} value={userData.name}/>
    <input placeholder="Enter your email" id="email" type="text" onChange={handleChange} value={userData.email}/>
    <input placeholder="Enter your password" id="password" type="password" onChange={handleChange} value={userData.password}/>
    <input placeholder="Enter your username" id="username" type="text" onChange={handleChange} value={userData.username}/>
    <input placeholder="Enter your mobile" id="mobile" type="number" onChange={handleChange} value={userData.mobile}/>
    <input placeholder="Enter description" id="description" type="text" onChange={handleChange} value={userData.description}/>
    
    <button onClick={handleSubmit}>Sign up</button>
    <button onClick={()=>navigate("/login")}>Already have an account go to login</button>
    </div>
  )
}
