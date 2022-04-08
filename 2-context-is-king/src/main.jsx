import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import RegistrationProvider from './contexts/RegistrationContext'

ReactDOM.render(
  <React.StrictMode>
 
   <BrowserRouter>
   <RegistrationProvider> 
  <App />
  
  </RegistrationProvider>
  </BrowserRouter> 

  </React.StrictMode>,
  document.getElementById('root')
)
