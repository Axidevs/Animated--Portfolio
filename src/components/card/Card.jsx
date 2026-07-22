 import React from 'react'
 import './Card.css'
 


 const Card = ({title,image}) => {
   return (
    <div id ="card">
       <h2>{title}</h2>

 <div className="hovercard">
 <img src = {image} alt='img'/>



 </div>


    </div>
  ) }

 export default Card
