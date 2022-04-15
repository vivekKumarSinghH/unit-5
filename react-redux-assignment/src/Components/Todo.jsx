import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {  getTodo, postTodo } from '../Redux/action'

function Todo() {
    const [text,setText]=useState("")
    const todos=useSelector(store=>store.todos)
// console.log(todos)
    const dispatch=useDispatch()
    const navigate=useNavigate()
useEffect(() => {
  dispatch(getTodo())
}, [])

  return (
    <div>
    <input type="text" onChange={(e)=>setText(e.target.value)}/>
    
    <button onClick={
        ()=>{
            const payload={
                title:text,
            complete:false}

dispatch(postTodo(payload))

        }
    }>Add Todo</button>


    {
        todos.map((ele)=>(<div key={ele.id}>
            <div><span>Task:</span><span>{ele.title}</span></div>
         <span>Complete</span>
         <input type="checkbox" checked={ele.complete}
         onChange={(e)=>{
const toggle={...ele,complete:e.target.checked}
axios.put(`http://localhost:3002/todos/${ele.id}`,toggle).then((res)=>dispatch(getTodo()))

}}
         />
            <button onClick={()=>{
                axios.delete(`http://localhost:3002/todos/${ele.id}`).then((res)=>dispatch(getTodo()))
 
            }}>
          Delete</button>
      <button    
  onClick={()=>navigate(`/todos/${ele.id}`)}>Single</button>
            </div>))
    }
    
    </div>
  
    )
}

export default Todo