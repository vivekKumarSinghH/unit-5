import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todo from './Components/Todo'
import { Route, Routes } from 'react-router'
import Home from './Components/Home'
import One from './Components/One'

function App() {
  
  return (
    <div className="App">
     <Routes>

     <Route path="/" element={<Home/>}/>
     <Route path="/todos/:id" element={<One/>}/>
     
     </Routes>
   
    </div>
  )
}

export default App
