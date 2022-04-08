import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Users() {
  const [user,setUser]=useState([])

  useEffect(()=>{
axios.get("http://localhost:3030/users").then(res=>setUser(res.data))

  },[])
  return (
    <div style={{margin:"auto",width:"fit-content"}}>
    <table style={{border:"1px solid green"}}>
    
    <thead>
    <tr>    
    <th style={{border:"1px solid green"}}>S.NO</th>
    <th style={{border:"1px solid green"}}>NAME</th>
    <th style={{border:"1px solid green"}}>AGE</th>
    <th style={{border:"1px solid green"}}>DATE OF BIRTH</th>
    <th style={{border:"1px solid green"}}>ADDRESS</th>
    <th style={{border:"1px solid green"}}>STATE</th>
    <th style={{border:"1px solid green"}}>PINCODE</th>
    
    </tr>

    </thead>

    <tbody>
    {user.map((e)=>(<tr key={e.id}>    
      <th style={{border:"1px solid green"}}>{e.id}</th>
      <th style={{border:"1px solid green"}}>{e.name}</th>
      <th style={{border:"1px solid green"}}>{e.age}</th>
      <th style={{border:"1px solid green"}}>{e.dateOfBirth }</th>
      <th style={{border:"1px solid green"}}>{e.address}</th>
      <th style={{border:"1px solid green"}}>{e.stateOfResidence}</th>
      <th style={{border:"1px solid green"}}>{e.pincode}</th>
      
      </tr>))}
    
    
    </tbody>
    </table>
    
    </div>
  )
}
