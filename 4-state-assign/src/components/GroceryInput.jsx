import { useState } from "react"

export const GInput=({fn})=>{

    const [Text,setText]=useState("")

    return (<div>
    <input value={Text} type="text" placeholder="Enter Groceries Name" onChange={(e)=>{
        setText(e.target.value)
        }    }></input>
    <button onClick={()=>{
        fn(Text)
        setText("")
    }
    }>Add</button>
  
    </div>)


}