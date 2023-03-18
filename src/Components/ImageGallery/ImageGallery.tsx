import React, { useEffect, useState } from 'react'
import './ImageGallery.css'
import Card from '../Card/Card'
import { db } from "./../../firebase";
import { equalTo, onValue, orderByChild, query, ref } from 'firebase/database';
import { useParams } from 'react-router-dom';

export default function ImageGallery() {

  let { id } = useParams();
  

  const [Img, setImg] = useState([{
    url: "",
    name: "",
    public_id :"",
  }])

const [state, setState] = useState(0);


const updateState=()=>{
  setState(state+1);
}

  // ============================FireBase===================================

  //read
  useEffect(() => {
    // renderGallery();
    setImg([]);
    const dbRef = ref(db, '/Image');

    const imgBytype = query(dbRef, orderByChild('stype'), equalTo(id + "" || "Mica Door"));
    // console.log("image by type",imgBytype)

    // console.log("current id",currentID)
    // console.log("usersnapshot",snapshot)
    onValue(imgBytype, (snapshot) => {
      // console.log("usersnapshot", snapshot.val())
      snapshot.forEach((childSnapshot) => {



        let arr = {
          url: childSnapshot.val().url,
          name: childSnapshot.val().stype,
          public_id: childSnapshot.val().public_id

        }
        setImg((pre) => [...pre, { ...arr }])
        // console.log('name', childSnapshot.val().stype);
        //  setUrl((types) => [...types, childSnapshot.val().url])
        //  console.log('Url',childSnapshot.val().url);
      });


    }, {
      onlyOnce: true
    });

    // console.log(Img);


  }, [id]);




  // ============================FireBase===================================
  let auth_token = localStorage.getItem('authtoken');
 
  return (

    <div className='G_main'>
      <div className='G_container'>
        <h1>Image Gallery</h1>   
        {auth_token=== 'true' &&
        <h4 style={{color:'red'}}>
          Admin Edit Mode..!!!
        </h4>
      }
        <h5>Available Designs</h5>
        <div className='G_div'>


          {Img.map((img, index) => {
            return (
              img.url !== "" &&
              <Card key={index} public_id={img.public_id} Url={img.url} Name={img.name +'-'+index} stype={img.name} onStateChange={updateState}/>
            )
          })}
        </div>

      </div>

    </div>
  )
}
