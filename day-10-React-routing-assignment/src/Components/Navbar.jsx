import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:'space-around'}}>
    
    <Link to="/">Home</Link>
    <Link to="/addproducts">Add Product</Link>
    <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar