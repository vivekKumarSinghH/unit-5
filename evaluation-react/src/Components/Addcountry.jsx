import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { postCountry } from '../Redux/country/action'

export default function Addcountry() {
    const [country,setCountry]=useState("")
const dispatch=useDispatch()

const navigate=useNavigate()
  return (
    <div>

    <div className="w-[25%] mt-[110px]  rounded-lg shadow-lg bg-[#FFEBC1] m-auto p-10  flex flex-col gap-4 justify-center">
    <input className="bg-[#E9D5DA]" placeholder="Add new Country" type="text" value={country} 
    onChange={(e)=>{
setCountry(e.target.value)
    }}
    />
    <button className="w-[30%] m-auto" onClick={()=>{
        const payload={name:country}
dispatch(postCountry(payload))
setCountry("")
navigate(`/`) 
    }}>Add Country</button>
    </div>
    </div>
  )
}
