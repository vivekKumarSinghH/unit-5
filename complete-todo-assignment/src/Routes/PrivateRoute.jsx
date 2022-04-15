import React from 'react'
import { Navigate } from 'react-router'

export default function PrivateRoute({isAuth,children}) {
  return isAuth?children:<Navigate to="/signup"/>
  
}
