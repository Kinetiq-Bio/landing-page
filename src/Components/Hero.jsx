import "./Hero.css";
import graphic from './graphic.png';

function Hero() {
    return (
        <div className="Hero">
            <div className="heroLeft">
                <h1 className="heading animate delay-1">KinetiQ</h1>

                <p className="subtitle animate delay-2">
                    An AI-Driven Biometric Knee Brace  
                </p>

                <button className="button animate delay-3">
                    Learn more!
                </button>
            </div>

            <div className="heroRight animate delay-3">
                <img
                    src={graphic}
                    alt="Sensor Functionality"
                    className="graphic"
                />
            </div>
        </div>
    );
}

export default Hero;
