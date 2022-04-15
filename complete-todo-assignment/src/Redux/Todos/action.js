import axios from "axios"

export const TODOS_LOADING="TODOS_LOADING"
export const TODOS_SUCCESS="TODOS_SUCCESS"
export const TODOS_FAILURE="TODOS_FAILURE"




export const todosloading=()=>({ type:TODOS_LOADING})
export const todossuccess=(payload)=>({type:TODOS_SUCCESS,payload})
export const todosfailure=()=>({type:TODOS_FAILURE})


export const addTodo=(todo)=>(dispatch)=>{
    
    axios
      .post("http://localhost:3002/todos", todo)
      .then(() => {
       
        dispatch(getTodo())
        

      })
    

}

export const EditTodo=({payload,id})=>(dispatch)=>{
    
  axios
    .put(`http://localhost:3002/todos/${id}`, payload)
    .then(() => {
     
      dispatch(getTodo())
      

    })
  

}
export const getTodo=()=>(dispatch)=>{
  dispatch(todosloading());
    axios
      .get("http://localhost:3002/todos")
      .then((res) => {
    //  console.log(res.data)
         dispatch( todossuccess(res.data))
        
        

      })
      .catch((err) => {
        dispatch(todosfailure());
      });
      }