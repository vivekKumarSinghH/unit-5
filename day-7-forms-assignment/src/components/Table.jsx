import axios from "axios"
import { useEffect, useState } from "react"

export const Table=()=>{

const [data,setData]=useState([])

    useEffect(()=>{
  axios.get("http://localhost:8301/Employee").then((res)=>{
    setData(res.data)

  })
    },[])


    return (
        <div>

        <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Married</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id} className="houseDetails">
                <td >{e.id}</td>
                <td >{e.name} </td>
                <td >{e.age}</td>
                <td >{e.address}</td>
                <td >{e.department}</td>
                
    <td >
                  {e.married?"Married":"Single"}
                </td>
                <td >{e.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
        </div>

    )
}