import React, { useEffect } from 'react'
import './UploadImage.css'
import { useState } from 'react';
import { db } from "./../../firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";


export default function UploadImage() {



  const [image, setImage] = useState<File | string>("")
  const [types, setType] = useState<string[]>([])
  const [stype, setStype] = useState("")


  const uuid = uid();


  // ===============================Cloudinary=================================== 
  const dataapi = "https://api.cloudinary.com/v1_1/dldfmckou/image/upload";
  const submitImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "my_preset")
    data.append("cloud_name", "dldfmckou")
    data.append("public_id", `${stype}/${uuid}`)
    // data.append("asset_folder","Main Door")


    fetch(dataapi, {
      method: "post",
      body: data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data['secure_url']);
        writeToDatabase(data['secure_url']);
        setImage("");

      }).catch((err) => {
        console.log(err);
      })
  }

  // ===============================Cloudinary===================================


  // ============================FireBase===================================

  //write
  const writeToDatabase = (url: string) => {


    set(ref(db, `Image/${uuid}`), {
      url,
      uuid,
      stype
    });


  };

  //read
  useEffect(() => {


    const dbRef = ref(db, '/Type');

    setType([]);
    onValue(dbRef, (snapshot) => {

      snapshot.forEach((childSnapshot) => {

        setType((types) => [...types, childSnapshot.val().name])
        //  console.log(types,'typename',childSnapshot.val().name);
      });


    }, {
      onlyOnce: true
    });



  }, []);




  // ============================FireBase===================================



  return (
    <div className='uploadMain'>
      <div className='uploadContainer'>
        <div className='uploadBox'>
          <input type="file" onChange={(e) => setImage(e.target.files![0])} />
          <label>Type</label>
          <select name="" id="" defaultValue="select" onChange={(e) => { setStype(e.target.value) }} >
            <option value="select" disabled>select</option>
            {types.map((type, index) => {
              return (
                <option key={index} value={type}>{type}</option>
              )
            })}




          </select>
          <button onClick={submitImage}>Upload</button>

        </div>

      </div>
    </div>
  )
}
