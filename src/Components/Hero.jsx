import React from "react";
import "./Hero.css";
// 1. ADD THIS IMPORT (Ensure the path to your image is correct!)
import graphic from './graphic.png'; 

function Hero() {
    return (
        <div className="Hero">
            <div className="heroLeft">
                <div className="badge animate delay-1">Next-Gen Biometrics</div>
                <h1 className="heading animate delay-1">KinetiQ</h1>
                <p className="subtitle animate delay-2">
                    An AI-Driven Biometric Knee Brace transforming physical therapy into a data-driven science.
                </p>
                <button className="button animate delay-3">
                    Explore Technology
                </button>
            </div>
            <div className="heroRight animate delay-3">
                <img src={graphic} alt="Sensor Functionality" className="graphic" />
            </div>
        </div>
    );
}

// 2. ADD THIS EXPORT
export default Hero;