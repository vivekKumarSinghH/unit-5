import axios from "axios";
import { useState } from "react";

export const Employee=()=>{

  const [employeeData,setEmployeeData]=useState({
    name:"",
    age:"",
    address:"",
    department:"",
    married:false,
    salary:""
})

const handleSubmit=(e)=>{
    e.preventDefault()
  axios.post("http://localhost:8301/Employee",employeeData)
    setEmployeeData({
    name:"",
    age:"",
    address:"",
    department:"",
    married:false,
    salary:""
    })
  }
const handleChange=(e)=>{
    if(e.target.checked){
    setEmployeeData({...employeeData,[e.target.id]:e.target.checked})
        return }

setEmployeeData({...employeeData,[e.target.id]:e.target.value})
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={employeeData.name} id="name" onChange={handleChange}/>
        <br/>
        <input type="Number" placeholder="Age" value={employeeData.age} id="age" onChange={handleChange}/>
        <br/>
        <input type="text" placeholder="Address" value={employeeData.address} id="address"onChange={handleChange}/>
        <br/>
        
        <select id="department" value={employeeData.department} onChange={handleChange}>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Marketing">Marketing</option>
        </select>
        <br/>
        <input type="Number" placeholder="Salary" value={employeeData.salary} id="salary" onChange={handleChange}/>
        <br />
          <label>Married</label>
        <input  type="checkbox"  id="married" value={employeeData.married} onChange={handleChange}/>
      <br/>
        <input text="Save Details" type="submit"  />
        </form>   
    )
}