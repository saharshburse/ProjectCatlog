import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export default function PrivateRoutes() {
    // let auth = {'authtoken':false}

    let auth_token = localStorage.getItem('authtoken');
    // setlogin(auth_token)
    
    
    

    return (
        auth_token==='true' ?   <Outlet/>   : <Navigate to='/login'/>
      
      )
}
