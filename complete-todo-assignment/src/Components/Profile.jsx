import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/Login/action';

export default function Profile() {
    const {token,username,name,email,mobile,description}=useSelector ((store)=>store.login)

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const dispatch=useDispatch()

    useEffect(()=>{

    dispatch(getData({config,username}))

},[])

  return (
    <div >
    
    <p className="text-2xl font-semibold">USER DETAILS</p>
{name?<div ><p>Name: {name}</p>
<p>User Name: {username}</p>
<p>Email: {email}</p>
<p>Mobile Number: {mobile}</p>
<p>description: {description}</p>
</div>:null}
<hr/>
    </div>

    
  )
}
