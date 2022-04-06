import React from 'react'
import { Route, Routes } from 'react-router'
import AddProducts from '../Components/AddProducts'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Notfound from '../Components/Notfound'
import Onepro from '../Components/Onepro'
import Products from '../Components/Products'

function AllRoutes() {
  return (
    <>
    <Navbar/>
   <Routes>
   
   <Route path="/" element={<Home/>}/>
   <Route path="/addproducts" element={<AddProducts/>}/>
   <Route path="/products" element={<Products/>}/>
   <Route path="/products/:id" element={<Onepro/>}/>
   <Route path="*" element={<Notfound/>}/>
   </Routes>
    
    </>
  )
}

export default AllRoutes