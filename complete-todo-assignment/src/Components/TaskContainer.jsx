import React from 'react'
import styled from 'styled-components'
import TaskCard from './TaskCard'

export default function TaskContainer({todos,heading,color}) {
//  console.log(todos)
const Topheading=styled.div`

padding:4px;
text-align:center;
font-size:24px;
font-weight:500;
background-color:${color};

`;

    return (
    <div className="border-black border-2  ">
    
    <Topheading>{heading}</Topheading>
    {todos.map((e)=>{
       return <TaskCard key={e.id} task={e}/>

    })}
    </div>
  )
}
