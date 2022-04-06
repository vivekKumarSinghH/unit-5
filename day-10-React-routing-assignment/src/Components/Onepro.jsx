import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Onepro() {
    const [pro,setPro]=useState(null)
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3030/products/${id}`).then((res)=>{
setPro(res.data)
})
    })
  return (
      
    <div>
    {pro?pro.name:"product doesn't found"}
    </div>
  )
}
