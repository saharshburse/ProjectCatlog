import { db } from "./../../firebase";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import React, { useState } from 'react'
import './CreateType.css'
export default function CreateType() {

    const [name,setname]=useState("")
    const [desc,setDesc]=useState("")
    
    const uuid = uid();


      // ============================FireBase===================================
    
  // const handleTodoChange = (e) => {
  //   setTodo(e.target.value);
  // };
    //write
    const writeToDatabase = () => {

      
        set(ref(db, `Type/${uuid}`), {
          desc,
          uuid,
          name
        });
        console.log("sucess");
    
        // setImgurl("");
      };
  
  
  
  
    
    // ============================FireBase===================================
  return (
      <div className='typemain'>
          <div className='typecontainer'>
              <h1>Create Type</h1>
              <form action="" className='typeform'>
                  <label>Type</label>
                  <input type="text" value={name} onChange={(e)=>{setname(e.target.value) }} placeholder='Type Name' />
                  <label>Description</label>
                  <textarea name="desc" value={desc} onChange={(e)=>{setDesc(e.target.value) }} id=""></textarea>
                  <button onClick={writeToDatabase}>ADD</button>

              </form>
          </div>
      </div>
  )
}
