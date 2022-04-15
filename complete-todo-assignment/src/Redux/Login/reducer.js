
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, USER_FETCH } from "./action"

const initi={
    isAuth:false,
    loading:false,
    error:false,
    token:"",
    username:"",
    name: "",
    email: "",
    mobile:"",
    description: "" 
      
    
} 

export const loginreducer=(store=initi,{type,payload})=>{

    switch(type){
        case LOGIN_SUCCESS:
            return {...store,
                isAuth:true,
                token:payload.token,
                username:payload.username,
                loading:false,
                error:false
            }
        case LOGIN_FAILURE:
            return {...store,error:true, 
                isAuth:false,
                loading:false}

        case LOGIN_LOADING:
            return {...store,loading:true}
        
            case LOGOUT:
            return {...initi
            }

            case USER_FETCH:
            return {...store,
             
              
              name:payload.name,
              mobile:payload.mobile,
              email: payload.email,
              description:payload.description

            }
            
        default:
            return store

    }
}

