import "./Manifesto.css"

function Manifesto() {
    return (
        <div className = "wrapper">
            <div className = "Manifesto">
                <h1 className = "title"> Medical Devices That Understand The Body</h1>
                <div  className = "description">
                    <p>
                        Injuries do not happen in isolation. Pain, motion, temperature, and recovery are <b>deeply connected</b>, 
                        yet most medical devices still treat them separately. We are here to change that.
                    </p>
                    <p>
                        At the <b>Biomedical Engineering Society</b>, we are building an <b>intelligent</b> knee brace that does not just support the joint,
                        it understands it. By combining biomechanics, embedded sensors, and artificial intelligence, 
                        we are creating a system that learns how your knee moves, responds to stress, and recovers over time.
                        Motion patterns, thermal changes, and pain signals become data, and data becomes insight.
                    </p>
                    <p>
                        We are <b>students</b>, <b>engineers</b>, and <b>builders</b> who believe that healthcare technology should be adaptive, personalized,
                        and human-centered. We experiment, prototype, test, fail, and iterate, because meaningful innovation demands it.
                        Our goal is simple: turn passive support into <b>active intelligence</b>, and transform recovery into a measurable, 
                        data-driven process.
                    </p>
                </div>
                <h2 className = "title2">This is where biology meets engineering.</h2>
            </div>
            

        </div>
    )
}

export default Manifesto