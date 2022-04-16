
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import {  putCity } from '../Redux/city/action'

export default function Edit() {
    
    const navigate=useNavigate()
    const [data,setData]=useState({
        name:"",
        population:"",
        country:""
    })
    const {id}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        axios.get(`http://localhost:3002/cities/${id}`).then((res)=>{
      setData(res.data)
    })
    },[])

    
   
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

    <input placeholder="Country" type="text" value={data.country} 
    onChange={(e)=>{
        setData({...data,country:e.target.value})
    }}
    />
    <button className="w-[30%] m-auto" onClick={()=>{
dispatch(putCity({data,id}))
setData({
    name:"",
    population:"",
    country:""
})
navigate(`/`) 
    }}>Edit City</button>

    </div>

    </div>
  )
}
