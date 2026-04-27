import React from "react";
import "./Manifesto.css";

function Manifesto() {
    return (
        <div className="wrapper">
            <div className="Manifesto">
                <h1 className="title">Medical Devices That Understand The Body</h1>
                <div className="description">
                    <p>
                        Injuries do not happen in isolation. Pain, motion, temperature, and recovery are <b>deeply connected</b>, 
                        yet most medical devices still treat them separately. We are here to change that.
                    </p>
                    {/* ... rest of your p tags ... */}
                </div>
                <h2 className="title2">This is where biology meets engineering.</h2>
            </div>
        </div>
    );
}

// 2. ADD THIS EXPORT
export default Manifesto;