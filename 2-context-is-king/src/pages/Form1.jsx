import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import "../App.css"
import { RegistrationContext } from '../contexts/RegistrationContext'
export default function Form1() {
  const { name,
    age,
    dateOfBirth,
    dispatch
  } = useContext(RegistrationContext)
const navigate=useNavigate()

  return (
    <div className="form">

      <input placeholder="Enter Your Name" value={name} onChange={(e) => dispatch({ type: "CHANGE_NAME", payload: e.target.value })} type="text" />
      <input placeholder="Enter Your Age" value={age} onChange={(e) => dispatch({ type: "CHANGE_AGE", payload: e.target.value })} type="number" />
      <input placeholder="Enter Your DOB" value={dateOfBirth} onChange={(e) => dispatch({ type: "CHANGE_DATE_OF_BIRTH", payload: e.target.value })} type="date" />

      <button
        disabled={(!name) || (!age) ||(!dateOfBirth)}
      onClick={()=>{
        navigate('/registration/two')
      }}
        >Next</button>

    </div>
  )
}
