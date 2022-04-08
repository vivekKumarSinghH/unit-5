import React, { createContext, useState } from 'react'

export const AuthContext=createContext();


function AuthContextProvider({children}) {
    const [isAuth,setAuth]=useState(false)
    const [token,setToken]=useState(null)
    const handleAuth=(x)=>{
       
    setAuth(x)
    }
    const handleToken=(x)=>{
setToken(x)
    }

    return (

      <AuthContext.Provider value={{isAuth,token,handleAuth,handleToken}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

