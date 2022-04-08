import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router'
import "../App.css"
import { RegistrationContext } from '../contexts/RegistrationContext'
export default function Form2() {
  const { 
    name,
    age,
    dateOfBirth,
     stateOfResidence,
  address,
  pincode,
    dispatch,
    
    handleSubmit
  } = useContext(RegistrationContext)

if((!name) || (!age) ||(!dateOfBirth)){
  return <Navigate to="/registration/one" />
}

  return (
    <div className="form">
    
 

    <input placeholder="Enter Your State of Residence" value={stateOfResidence} onChange={(e) => dispatch({ type: "CHANGE_STATE_OF_RESIDENCE", payload: e.target.value })} type="text" />
    <input placeholder="Enter Your Address" value={address} onChange={(e) => dispatch({ type: "CHANGE_ADDRESS", payload: e.target.value })} type="text" />
    <input placeholder="Enter Your Pin Code" value={pincode} onChange={(e) => dispatch({ type: "CHANGE_PINCODE", payload: e.target.value })} type="number" />

    <button
   disabled={ (!name) || (!age) ||(!dateOfBirth)|| (!stateOfResidence) || (!address) ||(!pincode)}
    onClick={
 handleSubmit
    }
      >Submit</button>
    </div>
  )
}
