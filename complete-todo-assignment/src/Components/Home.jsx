import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../Redux/Todos/action'
import Sidebar from './Sidebar'
import TaskContainer from './TaskContainer'

export default function Home() {
  const dispatch=useDispatch()
  const {todos}=useSelector ((store)=>store.todos)
useEffect(()=>{
dispatch(getTodo())
},[])
  return (
    <div className=" w-[90%]  h-screen m-auto mt-5
    grid grid-cols-4 gap-6 ">
    <Sidebar todos={todos}/>
  <TaskContainer todos={todos.filter((e)=>(e.status=="Todo"

  ))} color="#B9F8D3" heading="Todo"/>
  <TaskContainer todos={todos.filter((e)=>(e.status=="InProgress"

  ))} color="#FFFBE7" heading="InProgress"/>

  <TaskContainer todos={todos.filter((e)=>(e.status=="Done"

  ))} color="#E78EA9" heading="Done"/>

    

   
    </div>
  )
}
