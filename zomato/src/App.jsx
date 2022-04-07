
// import './App.css'
import { Route, Router, Routes } from 'react-router'
import AddRestaurantDetails from './Components/AddRestaurantDetails'
import Navbar from './Components/Navbar'
import Restaurants from './Components/Restaurants'

function App() {

  return (
    <div >
    <Navbar/>

    <Routes>


    <Route path="/" element={<Restaurants/>}/>
    <Route path="/add_restaurant" element={<AddRestaurantDetails/>}/>
    <Route path="/restaurants" element={<Restaurants/>}/>

    </Routes>

    </div>
  )
}

export default App
