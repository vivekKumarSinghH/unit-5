import React from 'react'
import { Navigate } from 'react-router'

export default function PrivateRoute({isAuthenticated,children}) {
  return isAuthenticated?children:<Navigate to="/signup"/>
  
}
