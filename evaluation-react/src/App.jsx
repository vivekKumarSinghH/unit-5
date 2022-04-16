
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import './App.css'
import Addcity from './Components/Addcity'
import Addcountry from './Components/Addcountry'
import Edit from './Components/Edit'
import Table from './Components/Table'

function App() {


  return (
    <div >
    <div className="flex bg-[#E9D5DA] h-[40px] justify-around text-2xl ">
    <Link to="/" >Table</Link>
    <Link to="addcountry" >Add Country</Link>
    <Link to="addcity" >Add City</Link>
  
     </div>
      
     

      <Routes>
      
      <Route path="/editcity/:id" element={<Edit/>}/>
      <Route path="/" element={ <Table/>}/>
      <Route path="/addcity" element={<Addcity/>}/>
      <Route path="/addcountry" element={<Addcountry/>}/>
      </Routes>
    </div>
  )
}

export default App
