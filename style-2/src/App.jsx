import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Inputboxes from './components/Inputboxes'

function App() {
  const [count, setCount] = useState("")

  return (
    <div className="App">
     <Inputboxes length={4} 
     onChange={(val)=>setCount(val)}
     />'
     <p>{count}</p>
    </div>
  )
}

export default App
