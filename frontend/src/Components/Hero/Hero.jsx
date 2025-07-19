import React from "react";
import "./Hero.css";
import hero_image from "../Assets/mane2.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
         <p>YOUR FINAL STOP TOWARDS FINDING A NEW HOME </p> 
          
        </div>
        <div className="hero-latest-btn">
          <div className="hero-latest-text">Find it here!!!</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
