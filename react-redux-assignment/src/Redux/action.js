import axios from "axios"

export const ADD_TODO="ADD_TODO"
 export const UPDATE_TODO="UPDATE_TODO"
 export const DELETE_TODO="DELETE_TODO"

 export const addtodo=(payload)=>{
return {type:ADD_TODO,payload}
 }
 export const updatetodo=(payload)=>{
    return {type:UPDATE_TODO,payload}
     }

     export const deletetodo=(payload)=>{
        return {type:DELETE_TODO,payload}
         }



         export const postTodo=(payload)=>(dispatch)=>{
             
          
axios.post("http://localhost:3002/todos",payload)
 dispatch(getTodo())
         }

         export const getTodo=()=>(dispatch)=>{

            axios.get("http://localhost:3002/todos").then((res)=>
            dispatch(addtodo(res.data))
                )

        }