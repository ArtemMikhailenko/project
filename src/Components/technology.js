import React from "react";
import techno from '../img/techno.png'
import tech1 from '../img/technology/tech1.png'
import tech2 from '../img/technology/tech2.png'
import tech3 from '../img/technology/tech3.png'
import tech4 from '../img/technology/tech4.png'


function Techology(){
    return(
        <div className="technology">
            <div className="technology_text" style={{ backgroundImage:`url(${techno})` }}>
                <p>TECHNOLOGIES & HARDWARE</p>
                USED BY HYDRA VR.
            </div>
            <div className="technology_arrow_border">
                <div className="technology_arrow"></div>
            </div>
            <div className="technology_image">
                <img src={tech1} alt=""></img>
                <img src={tech2} alt=""></img>
                <img src={tech3} alt=""></img>
                <img src={tech4} alt=""></img>

            </div>
        </div>
    )
}

export default Techology