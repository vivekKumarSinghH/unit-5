import React from 'react'

export default function Stats({todos}) {
  return (
    <div className="mt-10 text-center p-16 ">
    <div className="border-2 border-blue-400 w-full    mt-2  bg-blue-200 m-auto">
    All    {todos.length}</div>
    <div className="border-2 border-green-400 w-full   mt-2 bg-green-200 m-auto">
    Personal {todos.filter((e)=>e.tags.personal 
    ).length}</div>
    <div className="border-2 border-purple-400 w-full  mt-2 bg-purpule-200 m-auto">
    Official {todos.filter((e)=> e.tags.official
    ).length}
    </div>
    <div className="border-2 border-red-400 w-full   mt-2 bg-red-200 m-auto">
    
    Others {todos.filter((e)=> e.tags.others
    ).length}</div>
    
    </div>
  )
}
