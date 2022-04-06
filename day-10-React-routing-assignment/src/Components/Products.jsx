import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
const [data,setData]=useState([])
    useEffect(()=>{
axios.get("http://localhost:3030/products").then((res)=>{
setData(res.data)
})
    },[])



  return (
    <div>
    <table style={{margin:"auto"}}>
    <thead>
    <tr>
    <td>Product</td>
    <td>Price</td>
    <td> More details</td>
    </tr>
    </thead>
    <tbody>
{data.map((e)=>{


return <tr key={e.id}>
<td>{e.name}</td>
<td>{e.price}</td>
<td>
<Link to={`/products/${e.id}`}>More details</Link></td>
</tr>


})}
</tbody>

    </table>


    
    </div>
  )
}

export default Products