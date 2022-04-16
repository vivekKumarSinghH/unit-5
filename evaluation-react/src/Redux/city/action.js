import axios from "axios"

export const ADD_CITY_SUCCESS="ADD_CITY_SUCCESS"
export const ADD_CITY_LOADING="ADD_CITY_LOADING"


export const addCitySuccess=(payload)=>{
    return {type:ADD_CITY_SUCCESS,payload}

}
export const addCityLoading=()=>{
    return {type:ADD_CITY_LOADING}

}


export const getCity=()=>(dispatch)=>{

dispatch(addCityLoading())
    axios.get(`http://localhost:3002/cities`).then((res)=>
        dispatch(addCitySuccess(res.data))
    )}

    export const FilterCity=(add)=>(dispatch)=>{

        dispatch(addCityLoading())
            axios.get(`http://localhost:3002/cities${add}`).then((res)=>
                dispatch(addCitySuccess(res.data))
            )}
export const postCity=(payload)=>(dispatch)=>{

        axios.post("http://localhost:3002/cities",payload).then((res)=> dispatch(getCity())
        )
    
    
    }

    export const putCity=({data,id})=>(dispatch)=>{

        axios.put(`http://localhost:3002/cities/${id}`,data).then((res)=> dispatch(getCity())
        )
    
    
    }
    
export const deleteCity=(id)=>(dispatch)=>{

    axios.delete(`http://localhost:3002/cities/${id}`).then((res)=> dispatch(getCity())
    )


}