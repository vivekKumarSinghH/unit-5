export const List=({data,id,handleDelete})=>{

    return (
        <div>
        <h3>{data}</h3>
        <button onClick={
()=>[
    handleDelete(id)
]
        }>Delete</button>
        </div>
    )
}