import React from 'react'
import './Card.css'
interface Image_card{
    Url:string;
    Name:string;
}
export default function Card(props:Image_card) {


  return (
    <div className='card'>
        <img className='card_img' src={props.Url} alt="door" />
        <div className='card_p'>{props.Name}</div>

    </div>
  )
}
