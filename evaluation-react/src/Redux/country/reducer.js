import { ADD_COUNTRY_LOADING, ADD_COUNTRY_SUCCESS } from "./action"

const init={
    loading:false,
    countries:[]
}

export const CountryReducer=(state=init,{type,payload})=>{

switch (type){

    case ADD_COUNTRY_LOADING:
      return {...state,loading:true}

    case ADD_COUNTRY_SUCCESS:
        return {...state,countries:payload,loading:false}

    default:
        return state
}

}