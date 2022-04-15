import { ADD_TODO } from "./action"

const init={
    todos:[

    ]
}

export const todoReducer=(state=init,{type,payload})=>{
    
switch(type){
    case ADD_TODO:
        return {...state,todos:[...payload]}

        default:
            return state
}

}