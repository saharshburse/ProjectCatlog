import React, { useEffect, useState } from 'react'
import './ProductList.css'
import CardDetails from '../CardDetails/CardDetails'
import { onValue, ref } from 'firebase/database';
import { db } from "./../../firebase";
import { Link } from 'react-router-dom';

export default function ProductList() {

  
  const [List, setList] = useState([{
    desc:"",
    name:"",
  }])

   // ============================FireBase===================================

  //read
  useEffect(() => {

    setList([]);
    const dbRef = ref(db, '/Type');

  
    onValue(dbRef, (snapshot) => {

      snapshot.forEach((childSnapshot) => {

        
      
       let arr={
        desc:childSnapshot.val().desc,
        name:childSnapshot.val().name

       }
        setList((pre)=>[...pre,{...arr}])
         console.log('name',childSnapshot.val().name);
        //  setUrl((types) => [...types, childSnapshot.val().url])
         console.log('desc',childSnapshot.val().desc);
      });


    }, {
      onlyOnce: true
    });

    // console.log(Img);

  }, []);




  // ============================FireBase===================================

  
  return (
    <div className='listmain'>
      <h1>ProductList</h1>
      
      <div className='listdiv'>
      {List.map((img,index) => {
              return (
                img.name!==""&&
               <Link to={`/Gallery/${img.name}`}> <div className='cardlist'><CardDetails Name={img.name} Desc={img.desc} /></div></Link> 
              )
            })}
      </div>
    </div>
  )
}
