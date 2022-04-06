import axios from 'axios'
import React, { useState } from 'react'

function AddProducts() {
    const [data,setData]=useState({name:"",price:""})
    const handleSubmit=()=>{
axios.post("http://localhost:3030/products",data)
setData({name:"",price:""})

        return
    }
    const handleChange=(e)=>{

        setData( {...data,[e.target.id]:e.target.value})
        return
    }
  return (

   
    <div>

    <input placeholder="Enter product name" type="text" value={data.name} id="name" onChange={handleChange} ></input>
    <input placeholder="Enter price" type="Number" value ={data.price} id ="price" onChange={handleChange}></input>
    <button onClick={handleSubmit}> Add product</button>
    </div>
  )
}

export default AddProducts