import React from "react";
import react from "../../assets/reactdev.png";
import './About.css'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import Card from '../card/Card'
import mern from "../../assets/mern.png"

import java from "../../assets/java.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = () => {




  useGSAP(() => {
  gsap.from(".info1, .info2, .info3", {
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.3,

    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",

      toggleActions: "play none none reset",
    },
  });

// gsap.from(".card1, .card2, .card3", {
//   x: 200,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,

//   scrollTrigger: {
//     trigger: ".rightabout",
//     start: "top 80%",
//   },
// });


gsap.from(".card1, .card2, .card3", {
  x: -200,
  opacity: 0,
  duration: 3,
  stagger: 0.3,

scrollTrigger: {
    trigger: ".rightabout",
    start: "top 80%",
   
    scrub: true,
  },


});

});




  return (
    <div id = 'about'>
      
<div className="leftabout">

<div className="info1">


<div className="box1"></div>


<div className="personalinfo">
<h2>Personal Info</h2>
<p> <span>NAME:</span> AAYUSHI CHAUDHARY</p>
<p> <span>GENDER:</span> FEMALE</p>
<p><span>Email:</span> aayushi.ch81@gmail.com</p>
<p> <span>GitHub:</span> github.com/Axidevs</p>
</div>
</div>

<div className="info2">
<div className="box2"></div>

<div className="education">
<h2>Education</h2>
<p> <span>DEGREE:</span> BTECH</p>
<p> <span>COLLEGE-NAME:</span> BPIT , DELHI</p>
<p> <span>BRANCH:</span> INFORMATION TECHNOLOGY</p>
<p> <span>DURATION: </span>2025 - 2029</p>
</div>
</div>

<div className="info3">
<div className="box3"></div>

<div className="skills">

<h2>Skills</h2>
<p>WEB DEVELOPER </p>
<p>REACT DEVELOPER</p>
<p>JAVA</p>
</div>
</div>






</div>

<div className="rightabout">
  <div className="card1"><Card title ="WEB DEVELOPER"  image ={mern}/></div>
<div className="card2"><Card title = "JAVA" image = {java}/></div>
<div className="card3"><Card title = "REACT DEVELOPER" image = {react}/></div>



</div>










      </div>












    
  )
}

export default About
