import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CreateType from '../CreateType/CreateType'
import UploadImage from '../UploadImage/UploadImage'

export default function DashBoard() {
  return (
    <div>
        <h1>Admin DashBoard</h1>
      <Link to="/admin/uploadImage">
        <button>Upload Images</button>
      </Link>
      <Link to="/admin/createType">
        <button>Create Type</button>
      </Link>
      <Routes>
            <Route path='/uploadImage' element={<UploadImage/>} />
            <Route path='/createType' element={<CreateType/>} />
      </Routes>
    </div>
  )
}
