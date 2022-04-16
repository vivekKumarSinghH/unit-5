import axios from "axios"

export const ADD_COUNTRY_SUCCESS="ADD_COUNTRY_SUCCESS"
export const ADD_COUNTRY_LOADING="ADD_COUNTRY_LOADING"


export const addCountrySuccess=(payload)=>{
    return {type:ADD_COUNTRY_SUCCESS,payload}

}
export const addCountryLoading=()=>{
    return {type:ADD_COUNTRY_LOADING}

}


export const getCountry=()=>(dispatch)=>{

dispatch(addCountryLoading())
    axios.get("http://localhost:3002/countries").then((res)=>
        dispatch(addCountrySuccess(res.data))
    )}


export const postCountry=(payload)=>(dispatch)=>{

        axios.post("http://localhost:3002/countries",payload).then((res)=>
            dispatch(getCountry())
        )
    
    
    }