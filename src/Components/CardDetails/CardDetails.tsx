import React from 'react'
import './CardDetails.css'
interface List_card {
  Desc: string;
  Name: string;
}

export default function CardDetails(props: List_card) {

  return (
    <div className='Listcard'>
      <div className='cardimg'>
        <img src="Assets\door.png" alt="door" />
      </div>
      <div className='carddetail'>     
         <h3>{props.Name}</h3>
        <p>{props.Desc}</p>
        <button>View All</button>
      </div>


    </div>
  )
}
