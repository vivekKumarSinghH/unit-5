import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./actions"


const iniState={
    loading :false,
    isAuthenticated:false,
    token:"",
    error:false
}
const loginReducer=(store=iniState,{type,payload})=>{
   
    switch(type){
        case LOGIN_LOADING:
             return {...store,loading:true} 
     
        case LOGIN_SUCCESS:
                return {...store,loading:false,
                    isAuthenticated:true,
                token:payload,
                error:false
                }
                
        case LOGIN_FAILURE:
            return {...store,loading:false,
                isAuthenticated:false
                ,error:true} 
            
        default :
        return store;
    }

}



export {loginReducer}