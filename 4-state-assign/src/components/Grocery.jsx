import { useState } from "react"
import { GInput } from "./GroceryInput"
import { v4 as uuidv4 } from 'uuid';
import { List } from "./GroceryList";
export const Grocery=()=>{

    const [GroceriesList,SetGroceriesList]=useState([])

    const getData=(data)=>{

        let payload={
            data,
            status:false,
            id:uuidv4()
        }
        SetGroceriesList([...GroceriesList,payload])
 
    }

    const  handleDelete=(id)=>{
        let update=GroceriesList.filter(item=>item.id===id?false:true)
    SetGroceriesList(update)
    }

return <div>

<GInput fn={getData}/>

{
    GroceriesList.map((ele)=>(
<List {...ele}
handleDelete={handleDelete}/>
    ))
}
</div>
}