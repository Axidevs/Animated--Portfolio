import React from 'react'
import './Contact.css'

import contact from "../../assets/contact.png"
import Card from '../card/Card'


const Contact = () => {
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
