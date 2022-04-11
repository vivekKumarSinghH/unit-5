import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getProductData } from '../Redux/Products/actions'
import "../App.css"
import { Navigate } from 'react-router'
export default function Home() {

  const {products}=useSelector((store)=>store.products)
  const dispatch=useDispatch()
  
  const fetchData=()=>{
    dispatch(getProductData())
  }

  useEffect(() => {
  fetchData()
  }, [])
  
  // if(!isAuthenticated){
  //   return <Navigate to="/signup"/>
  // }
  return (
    <div>
    <h1>Product Page</h1>
    <div className="card">
{products.map((e)=>{
return <div key={e.id}>
<img src={e.image}>
</img>
<p>{e.title}</p>
</div>

})}
    </div>

    </div>
  )
}
