import React, { useRef } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"

const Nav = () => {

let menu = useRef()
let mobile = useRef()

  return (
    <nav>

<h1>PORTFOLIO</h1>

<ul className = 'desktopmenu'>

<Link to = "home" smooth = {true} activeClass='active' spy = {true} duration={500}><li>HOME</li></Link>
<Link to = "about" smooth = {true} activeClass='active' spy = {true}  duration={500}><li>ABOUT</li></Link>
<Link to = "projects" smooth = {true} activeClass='active' spy = {true}  duration={500}><li>PROJECTS</li></Link>
<Link  to = "contact" smooth = {true} activeClass='active' spy = {true}  duration={500}><li>CONTACT</li></Link>


</ul>

<div className="hamburger" ref = {menu} onClick = {()=>{
mobile.current.classList.toggle("activemobile")
menu.current.classList.toggle("activeham")

}}>

<div className="ham"></div>
<div className="ham"></div>
<div className="ham"></div>



</div>

    
      <ul className = 'mobilemenu' ref = {mobile}>

<Link to = "home" smooth = {true} activeClass='active' spy = {true} duration={500}><li>HOME</li></Link>
<Link to = "about" smooth = {true} activeClass='active' spy = {true}  duration={500}><li>ABOUT</li></Link>
<Link to = "projects" smooth = {true} activeClass='active' spy = {true}  duration={500}><li>PROJECTS</li></Link>
<Link  to = "contact" smooth = {true} activeClass='active' spy = {true}  duration={500}><li>CONTACT</li></Link>

</ul>



    </nav>
  )
}

export default Nav
