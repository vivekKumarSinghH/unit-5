
import React  from "react";


import {  useSelector } from "react-redux";
import Sidebar from "./Sidebar";

export default function Summary() {
  
  const {todos}=useSelector((store)=>store.todos)


  return (<div className="flex gap-2 w-full  mt-5 justify-between">

   <Sidebar todos={todos} />
    
<div className="p-10 border-2 border-black w-[85%]">
<p className="text-2xl font-semibold ">Summary</p>
<div className="flex w-[20%] p-2 border-2 my-4 border-gray-200 justify-between">
<span>TODO</span> <span>{todos.filter((e)=>(e.status=="Todo"

)).length}</span></div>
<div className="flex w-[20%] p-2 border-2 my-4 border-gray-200 justify-between">
<span>In Progress</span> <span>{todos.filter((e)=>(e.status=="InProgress"

)).length}</span></div>
<div className="flex w-[20%] p-2 border-2 my-4 border-gray-200 justify-between">
<span>Done</span> <span>{todos.filter((e)=>(e.status=="Done"

)).length}</span></div>
</div>
    </div>
  );
}
