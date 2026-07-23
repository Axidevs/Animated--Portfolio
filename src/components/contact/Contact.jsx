import React from 'react'
import './Contact.css'

import contact from "../../assets/contact.png"
import Card from '../card/Card'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(useGSAP, ScrollTrigger);



const Contact = () => {

useGSAP(()=>{
  gsap.from(".leftcontact img", {

x:-200,
duration:1,

opacity:0,
// stagger: 1,

scrollTrigger:{

  trigger:"#contact",
 start: "top 80%",
 toggleActions: "play none none reset",
//  scrub:true, toggleActions: "play none none reset",
}


})



gsap.from(".rightcontact", {

x:200,
duration:1,

opacity:0,
// stagger: 1,

scrollTrigger:{

  trigger:"#contact",
 start: "top 80%",
 toggleActions: "play none none reset",
}
// scrub:true,


})




})



  return (
    <div id = "contact">
      
<div className="leftcontact">

<img src = {contact} alt='img'/>

</div>

<div className="rightcontact">

<form action = 'https://formspree.io/f/mdaqlkbj' method="POST">

<input type='text' placeholder='Name' name='Username'/>
<input type='email' placeholder='Email' name='Email'/>
<textarea
  className="msgbox"
  placeholder="Type your message..."
></textarea>
<button id='btn'>Submit</button>




</form>






</div>



    </div>
  )
}

export default Contact
