import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getTodo } from '../Redux/Todos/action'

export default function TaskCard({task}) {
// console.log(task)
const {title,description,subtasks,status,tags,date,id}=task
const {personal,official,others}=tags
const dispatch=useDispatch()

const navigate=useNavigate()
  return (

    <div className="border-black border-2 w-[90%] m-auto p-2 my-5 flex-col gap-2 flex">
  
<p>{title}</p>
<div className="flex justify-around">
<span className="border-black border-2 m-auto">{personal &&"PERSONAL"} {official && "OFFICIAL"} {others && "OTHERS"}</span>
<span>{date}</span>
</div>

<p>{description}</p>

{subtasks.map((e)=><div key={e.id}>
  <label>
  <input type="checkbox" checked={e.subtaskStatus}
  
  onChange={(event)=>{
const subTaskAtfertoggle=subtasks.map((x)=>(x.id==e.id)?
{...x,subtaskStatus:event.target.checked}:x)
  
const payload={title,description,
  subtasks:subTaskAtfertoggle
  ,status,tags,date}

axios.put(`http://localhost:3002/todos/${id}`,payload).then(res=>dispatch(getTodo()))



}}
   
   
   >
  
  </input>

  </label>
  {e.subtaskTitle}
  </div>)}
  <button
  className="w-[70%] m-auto"
  onClick={()=>navigate(`/todos/${id}/edit`)}>Edit</button>
   
    </div>
  )
}
