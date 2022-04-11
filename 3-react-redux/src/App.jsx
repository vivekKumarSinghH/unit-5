
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import PrivateRoute from './Routes/PrivateRoute'

function App() {
  const {isAuthenticated}=useSelector((store)=>store.login)
 
  return (
    <div className="App">
    
      <Routes>
      {/** private route */}
      
      <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} ><Home/></PrivateRoute>}/>
      
      {/**public routes */}
      
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
      </Routes>
    </div>
  )
}

export default App
