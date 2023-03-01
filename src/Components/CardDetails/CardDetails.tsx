import React from 'react'
import './CardDetails.css'
interface List_card{
    Desc:string;
    Name:string;
  }

export default function CardDetails(props:List_card) {
    
  return (
    <div className='Listcard'>
        <h3>{props.Name}</h3>
        <p>{props.Desc}</p>

    </div>
  )
}
