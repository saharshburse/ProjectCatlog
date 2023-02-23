import React from 'react'
import './UploadImage.css'
import { useState } from 'react';
import { db } from "./../../firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
// import {cloudinary} from 'cloudinary'

export default function UploadImage() {


 
    const [image,setImage]=useState<File | string>("")
    const [types,setType]=useState<string[]>([])
    const [stype,setStype]=useState("")
    const arr=["Main Door","Mica Door","CNC Groove"];
    setType(arr);
    const uuid = uid();
    // const [uploadres,setUploadres]=useState({})
    // const [imgUrl,setImgurl]=useState("")

 // ===============================Cloudinary=================================== 
    const dataapi="https://api.cloudinary.com/v1_1/dldfmckou/image/upload";
    const submitImage= ()=>{
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","my_preset")
      data.append("cloud_name","dldfmckou")
      data.append("public_id",`${stype}/${uuid}`)
      // data.append("asset_folder","Main Door")


      fetch(dataapi,{
        method:"post",
        body:data
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        // setUploadres(data);
        // setImgurl(data['secure_url']);
        console.log(data['secure_url']);
        // console.log(imgUrl);

        writeToDatabase(data['secure_url']);
        setImage("");

      }).catch((err)=>{
        console.log(err);
      })
    }

  // ===============================Cloudinary===================================
 

  // ============================FireBase===================================
    
  // const handleTodoChange = (e) => {
  //   setTodo(e.target.value);
  // };
    //write
    const writeToDatabase = (url:string) => {

      
      set(ref(db, `Image/${uuid}`), {
        url,
        uuid,
        stype
      });
  
      // setImgurl("");
    };




  
  // ============================FireBase===================================



  return (
    <div className='uploadMain'>
        <div className='uploadContainer'>
          <div className='uploadBox'>
            <input type="file"  onChange={ (e) =>  setImage(e.target.files![0]) } />
            <label>Type</label>
            <select name="" id="" defaultValue="select"  onChange={(e)=>{setStype(e.target.value) }} >
              <option value="select" disabled>select</option>
            {types.map((type, index) => {
                                return (
                                  <option key={index} value={type}>{type}</option>
                                       )
                            })}


              
            </select>
            <button onClick={submitImage }>Upload</button>

          </div>
            
        </div>
    </div>
  )
}
