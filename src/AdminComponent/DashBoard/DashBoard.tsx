import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CreateType from '../CreateType/CreateType'
import UploadImage from '../UploadImage/UploadImage'
import { useNavigate } from 'react-router-dom';
import './DashBoard.css'
export default function DashBoard() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem("authtoken", "false");
    console.log("Logout Sucess")
    navigate('/');
  }
  return (
    <div className='adminmain'>
      <div className='admincontainer'>
      <h1>Admin DashBoard</h1>
      <div className='adminbtn'>
        <Link to="/admin/uploadImage">
          <button>Upload Images</button>
        </Link>
        <Link to="/admin/createType">
          <button>Create Type</button>
        </Link>

        <button onClick={logout}>Logout</button>
      </div>
      </div>
      


      <Routes>
        <Route path='/uploadImage' element={<UploadImage />} />
        <Route path='/createType' element={<CreateType />} />
      </Routes>
    </div>
  )
}
