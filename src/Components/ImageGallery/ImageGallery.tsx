import React, { useEffect, useState } from 'react'
import './ImageGallery.css'
import Card from '../Card/Card'
import { db } from "./../../firebase";
import { equalTo, onValue, orderByChild, query, ref } from 'firebase/database';
import { useParams } from 'react-router-dom';

export default function ImageGallery() {

  let { id } = useParams();
  // const [currentID,setcurrentID]=useState("");

  const [Img, setImg] = useState([{
    url:"",
    name:"",
  }])
 

  
  
   
  // const [name, setName] = useState<string[]>([])
    
  // ============================FireBase===================================

  //read
  useEffect(() => {
    const dbRef = ref(db, '/Image');

    const imgBytype = query(dbRef, orderByChild('stype'),equalTo(id+""));
    // console.log("image by type",imgBytype)
     
    // console.log("current id",currentID)
    // console.log("usersnapshot",snapshot)
    onValue(imgBytype, (snapshot) => {
      console.log("usersnapshot",snapshot.val())
      snapshot.forEach((childSnapshot) => {

        
      
       let arr={
        url:childSnapshot.val().url,
        name:childSnapshot.val().stype

       }
        setImg((pre)=>[...pre,{...arr}])
         console.log('name',childSnapshot.val().stype);
        //  setUrl((types) => [...types, childSnapshot.val().url])
        //  console.log('Url',childSnapshot.val().url);
      });


    }, {
      onlyOnce: true
    });

    // console.log(Img);

  }, [id]);




  // ============================FireBase===================================



  return (

    <div className='G_main'>
        <div className='G_container'>
          <h1>Image Gallery</h1>
          <div className='G_div'>
            
         
          {Img.map((img,index) => {
              return (
                img.url!==""&&
                <Card key={index} Url={img.url} Name={img.name} />
              )
            })}
          </div>
          
        </div>
        
       




    </div>
  )
}
