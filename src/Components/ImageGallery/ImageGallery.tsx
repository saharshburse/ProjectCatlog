import React, { useEffect, useState } from 'react'
import './ImageGallery.css'
import Card from '../Card/Card'
import { db } from "./../../firebase";
import { onValue, ref } from 'firebase/database';

export default function ImageGallery() {



  const [Img, setImg] = useState([{
    url:"",
    name:"",
  }])
  // const [name, setName] = useState<string[]>([])
    
  // ============================FireBase===================================

  //read
  useEffect(() => {


    const dbRef = ref(db, '/Image');

  
    onValue(dbRef, (snapshot) => {

      snapshot.forEach((childSnapshot) => {

        
      
       let arr={
        url:childSnapshot.val().url,
        name:childSnapshot.val().stype

       }
        setImg((Img)=>[...Img,{...arr}])
         console.log(Img,'name',childSnapshot.val().stype);
        //  setUrl((types) => [...types, childSnapshot.val().url])
         console.log(Img,'Url',childSnapshot.val().url);
      });


    }, {
      onlyOnce: true
    });

    console.log(Img);

  }, []);




  // ============================FireBase===================================



  return (

    <div className='G_main'>
        <div className='G_container'>
          <h1>Image Gallery</h1>
          <div className='G_div'>
            
         
          {Img.map((img,index) => {
              return (
                img.url!=""&&
                <Card Url={img.url} Name={img.name} />
              )
            })}
          </div>
          
        </div>
        
       




    </div>
  )
}
