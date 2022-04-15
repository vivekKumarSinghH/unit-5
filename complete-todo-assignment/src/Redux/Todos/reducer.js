import { TODOS_FAILURE, TODOS_LOADING, TODOS_SUCCESS } from "./action"

const initi={
    loading:false,
    error:false,
  todos:[]
      
    
} 

export const todosreducer=(store=initi,{type,payload})=>{

    switch(type){

        case TODOS_LOADING:
            return {...store,loading:true}
        
        case TODOS_SUCCESS:
            return {...store,
                todos:[...payload],
                loading:false,
                error:false
            }
        case TODOS_FAILURE:
            return {...store,error:true,
                todos:[], 
                loading:false}

        
            
        default:
            return store

    }
}
