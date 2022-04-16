import { ADD_CITY_LOADING, ADD_CITY_SUCCESS } from "./action"

const init={
    loading:false,
    cities:[]
}

export const CityReducer=(state=init,{type,payload})=>{

switch (type){

    case ADD_CITY_LOADING:
      return {...state,loading:true}

    case ADD_CITY_SUCCESS:
        return {...state,cities:payload,loading:false}

    default:
        return state
}

}