import React from 'react'
import './UploadImage.css'
import { useState } from 'react';
// import config from './../../config'

export default function UploadImage() {


  // ===============================Cloudinary===================================
    const [image,setImage]=useState<File | string>("")
    const dataapi="https://api.cloudinary.com/v1_1/dldfmckou/image/upload";
    const submitImage= ()=>{
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","my_preset")
      data.append("cloud_name","dldfmckou")

      fetch(dataapi,{
        method:"post",
        body:data
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
      }).catch((err)=>{
        console.log(err);
      })
    }

  // ===============================Cloudinary===================================

  // ============================FireBase===================================
    


  
  // ============================FireBase===================================



  return (
    <div className='uploadMain'>
        <div className='uploadContainer'>
          <div className='uploadBox'>
            <input type="file"  onChange={ (e) =>  setImage(e.target.files![0]) } />
            <button onClick={submitImage}>Upload</button>

          </div>
            
        </div>
    </div>
  )
}
