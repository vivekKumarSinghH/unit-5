import axios from "axios"

export const GET_PRODUCTS="GET_PRODUCTS"
export const GET_PRODUCTS_LOADING="GET_PRODUCTS_LOADING"
export const GET_PRODUCTS_ERROR="GET_PRODUCTS_ERROR"



export const getProducts=(payload)=>({type:GET_PRODUCTS,payload})
export const getProductsLoading=()=>({type:GET_PRODUCTS_LOADING})
export const getProductsError=()=>({type:GET_PRODUCTS_ERROR})


export const getProductData=()=>(dispatch)=>{
   
    
    
    dispatch(getProductsLoading())

    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        dispatch(getProducts(res.data))
    })
    .catch((e)=>dispatch(getProductsError))
}