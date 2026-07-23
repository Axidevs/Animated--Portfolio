import React from 'react'
import "./Project.css"
import tic from "../../assets/tic tac toe.jpeg"
import vi from "../../assets/vii.png"
import cc from "../../assets/cc.png"
import image from "../../assets/food.png"
import ai from "../../assets/ise.png"
import website from "../../assets/website.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(useGSAP, ScrollTrigger);

import './Project.css'
import Card from '../card/Card'
const Project = () => {

useGSAP (()=>{

gsap.from(".heading", {

y:100,
duration:1.2,

opacity:0,
stagger: 0.3,

scrollTrigger:{

  
 trigger: ".heading",
    start: "top 80%",
    toggleActions: "play none none reset",
//  scrub:true,


}

})




gsap.from(".cards", {

x:-200,
duration:0.7,

opacity:0,
stagger: 0.8,

scrollTrigger:{

  trigger:".cards",
 start: "top 80%",
 scrub:true,
}



});







});




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
<Card title= "Food Delivery Website" image = {image} />
<Card title="AI Chatbot " image = {ai}/>



</div>






    </div>
  )
}

export default Project
