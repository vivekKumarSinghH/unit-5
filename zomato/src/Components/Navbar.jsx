import React from 'react'
import { Link } from 'react-router-dom'
import AddRestaurantDetails from './AddRestaurantDetails'

export default function Navbar() {
  return (
    <div className="  bg-slate-700 h-10">
    <div className="m-auto w-[70%]  flex  justify-around py-2 text-white" >   
    <Link to="/add_restaurant">
    Add Restaurant</Link>
    <Link to="/restaurants">Show Restaurant</Link>
    </div>

    </div>
  )
}
