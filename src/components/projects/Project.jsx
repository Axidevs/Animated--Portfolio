import React from 'react'
import "./Project.css"
import tic from "../../assets/tic tac toe.jpeg"
import vi from "../../assets/vii.png"
import cc from "../../assets/cc.png"
import food from "../../assets/food.png"
import ai from "../../assets/ai.png"
import website from "../../assets/website.png"

import './Project.css'
import Card from '../card/Card'
const Project = () => {
  return (
    <div id = "projects">
      
<div className="heading">

<h1>2+ Years Experienced in Projects </h1>

</div>

<div className="cards">

<Card title ="AI Powered Website" image = {website}/>
<Card title = " Tic Tac Toe Game" image = {tic}/>
<Card title= " Currency Convertor" image = {cc}/>

<Card title ="Virtual Assistant " image = {vi}/>
<Card title= "Food Delivery Website" image = {food} />
<Card title="AI Chatbot " image = {ai}/>



</div>






    </div>
  )
}

export default Project
