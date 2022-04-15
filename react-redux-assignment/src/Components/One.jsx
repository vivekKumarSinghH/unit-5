import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getTodo } from '../Redux/action'

export default function One() {
    
    const {id}=useParams()
    const [data,setData]=useState({
     title:"",
     complete:false   
    })
    useEffect(() => {
        axios.get(`http://localhost:3002/todos/${id}`).then((res)=>setData(res.data))
 
      }, [])

      const dispatch=useDispatch()
  return (
    <div>
    
    
            <div><span>Task:</span><span>{data.title}</span></div>
         <span>Complete</span>
         <input type="checkbox" checked={data.complete}
         onChange={(e)=>{
const toggle={...data,complete:e.target.checked}
axios.put(`http://localhost:3002/todos/${id}`,toggle).then(dispatch(getTodo()))

}}
         />
            <button onClick={()=>{
                axios.delete(`http://localhost:3002/todos/${id}`).then(dispatch(getTodo()))
 
            }}>
          Delete</button>
  
    </div>
  )
}
