
import { Route, Routes } from 'react-router'
import './App.css'
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import Users from './pages/Users'

function App() {

  return (
    <div className="App">
     <Routes>     
     
     
     <Route path="/registration/one" element={<Form1/>}/>
     <Route path="/registration/two" element={<Form2/>}/>
     <Route path="/users" element={<Users/>}/>
     
     <Route/>
     </Routes>

    </div>
  )
}

export default App
