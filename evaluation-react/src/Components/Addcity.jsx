import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { postCity } from '../Redux/city/action'
import { getCountry } from '../Redux/country/action'

export default function Addcity() {
    
  const {countries}=useSelector(store=>store.country)

//   console.log(countries)
  const dispatch=useDispatch()
  
  const navigate=useNavigate()

  useEffect(()=>dispatch(getCountry()),
  [])

const [data,setData]=useState({
    name:"",
    population:"",
    country:""
})

  return (
    <div>
    <div  className="w-[25%] mt-[110px]  rounded-lg shadow-lg bg-[#FFEBC1] m-auto p-10  flex flex-col gap-4 justify-center">

    <input placeholder="Add new City" type="text" value={data.name} 
    onChange={(e)=>{
setData({...data,name:e.target.value})
    }}
    />
    
    <input placeholder="Population" type="number" value={data.population} 
    onChange={(e)=>{
        setData({...data,population:e.target.value})
    }}
    />
    {data.country!=""?<div className="border-2 border-black text-center">{data.country}</div>:
<div className="border-2 border-black text-center" >
{
    countries.map((el)=>{
        return <div className="border-2 border-black text-center" key={el.id} onClick={()=>{
            
        setData({...data,country:el.name})
        }}>
        {el.name}
        </div>
    })
}</div>}

    
    
    <button className="w-[30%] m-auto bg-[#E9D5DA]" onClick={()=>{
dispatch(postCity(data))
setData({
    name:"",
    population:"",
    country:""
})
navigate(`/`)  }}>Add City</button>

    </div>

    </div>
  )
}
