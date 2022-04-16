import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCity, FilterCity, getCity } from '../Redux/city/action'
import "../App.css"
import { useNavigate } from 'react-router'
export default function Table() {
 
    const navigate=useNavigate()
const dispatch=useDispatch()

  useEffect(()=>dispatch(getCity()),
  [])
  
  const {cities}=useSelector(store=>store.city)
//   console.log(cities)
// const dispatch=useDispatch()
const [cn,setcn]=useState("")
  return (
    <div>
    
    <div className="w-[50%] mt-[110px]  rounded-lg shadow-lg bg-[#FFEBC1] m-auto p-10  flex flex-col gap-4 justify-center">
    
    <table>
    <thead>
    <tr>
    <th>Id</th>
    <th>Country</th>
    <th>City</th>
    <th>Population</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {cities.map((e)=>{


    return <tr key={e.id} className="m-auto text-center" >
    <td>{e.id}</td>
    <td>{e.country}</td>
    <td>{e.name}</td>
    <td>{e.population}</td>
    <td><button className="px-4 bg-[#E9D5DA]" onClick={()=>(
        navigate(`/editcity/${e.id}`)
    )} >Edit</button></td>
    <td><button className="px-4 bg-[#E9D5DA]" onClick={()=>{

dispatch(deleteCity(e.id))
    }}>Delete</button></td>
    </tr>
   
    
    

})}
</tbody>
    </table>
    <div className="w-[50%] text-center m-auto flex flex-col gap-4">
    <button onClick={()=>{
      dispatch(FilterCity("/?_sort=population&_order=asc"))
    }}>Sort Low To High Population</button>
    <button
    onClick={()=>{
      dispatch(FilterCity("/?_sort=population&_order=desc"))
    }}>Sort High to low Population</button>


    <input placeholder="enter the name of country" type="text" 
    onChange={(e)=>{
setcn(e.target.value)
    }}/>
    <button onClick={()=>{
      
      dispatch(FilterCity(`/?country=${cn}`))
      setcn("")
    }}>Filter</button>

    </div>
    </div>
    </div>
  )
}
