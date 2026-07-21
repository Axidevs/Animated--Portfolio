
import "./Home.css"
import man from '../../assets/man.png'

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";


const Home = () => {
  const typingRef = useRef(null);

useEffect(() => {
  const typed = new Typed(typingRef.current, {
    strings: [
      "WEB DEVELOPER",
      "FRONTEND DEVELOPER",
      "REACT DEVELOPER",
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });

  return () => {
    typed.destroy();
  };
}, []);
    return (
  <div id="home">

    <div className="lefthome">
      <div className="homedetails">

        <div className="line1">I'M</div>

        <div className="line2">AAYUSHI CHAUDHARY</div>

        <div className="line3">
  <span ref={typingRef}></span>
</div>

        <button className="btn">
          HIRE ME
        </button>

      </div>
    </div>

    <div className="righthome">
      <img src={man} alt="man" />
    </div>

  </div>
);

}
export default Home
