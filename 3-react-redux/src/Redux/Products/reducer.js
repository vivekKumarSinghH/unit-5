import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING } from "./actions"


const iniState={
    loading :false,
    products:[],
    error:false
}



const productReducer=(store=iniState,{type,payload})=>{
    // console.log(store,type,payload)
    switch(type){
        case GET_PRODUCTS_LOADING:
             return {...store,loading:true} 
     
        case GET_PRODUCTS:
                return {...store,loading:false,
               
                error:false,
                products:[...payload ]
                }
                
        case GET_PRODUCTS_ERROR:
            return {...store,loading:false
                
                ,error:true} 
            
        default :
        return store;
    }
}

export {productReducer}