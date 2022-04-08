import axios from 'axios';
import React, { createContext, useReducer } from 'react'
import { useNavigate } from 'react-router';

export const RegistrationContext=createContext()

const initState={
    name:"",
    age:"",
    dateOfBirth:"",
    stateOfResidence:"",
    address:"",
    pincode:""
}

function reducer(state,action){
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name:action.payload};

        case "CHANGE_AGE":
            return {...state,age:action.payload};

        case "CHANGE_DATE_OF_BIRTH":
            return {...state,dateOfBirth:action.payload};

        case "CHANGE_STATE_OF_RESIDENCE":
            return {...state,stateOfResidence:action.payload};

        case "CHANGE_ADDRESS":
            return {...state,address:action.payload};
        
        case "CHANGE_PINCODE":
            return {...state,pincode:action.payload};

            default:
                throw new Error()
        
    }
}


function RegistrationProvider({children}) {
    

    const [state,dispatch]=useReducer(reducer,initState);

    const { name,
    age,
    dateOfBirth,
    stateOfResidence,
    address,
    pincode
}=state
    
const navigate=useNavigate()
const handleSubmit=()=>{
    // console.log("y")
    axios.post("http://localhost:3030/users",state)
    

    navigate('/users')
    
   }
  return (
      <RegistrationContext.Provider value={{ name,
        age,
        dateOfBirth,
        stateOfResidence,
        address,
        pincode,
        dispatch,
        handleSubmit
    }}>
      {children}
      </RegistrationContext.Provider>
  )
}

export default RegistrationProvider