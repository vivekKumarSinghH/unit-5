import axios from "axios"
import { useEffect, useState } from "react"

 export const Todo=()=>{
const [text,setText]=useState("")

const [todo,setTodo]=useState([])

const [page,setPage]=useState(1)

useEffect(()=>{
     getData() 
 },[page])

const getData=()=>{
    axios.get(`http://localhost:3301/todos?_limit=3&_page=${page}`).then((res)=>{
setTodo(res.data)
})}
    return (
        <div>
        <input type="text" onChange={(e)=>{setText(e.target.value)} }/>
<button onClick={()=>{
            axios.post("http://localhost:3301/todos",{title:text,status:false}).then(()=>{
                getData()})}        }>Save</button>
{todo.map((e)=><div key={e.id}>{e.title}</div>)}
<button onClick={()=>{
    setPage(page+1)}}>Next</button>
<button onClick={()=>{
    setPage(page-1)
}}>Prev</button>
     </div>
    )
 }