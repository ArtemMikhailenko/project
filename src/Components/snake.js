import React from "react";
import arrow from '../img/arrow-snake.png'
import vector from '../img/Vector15.png'
import arrowS from '../img/arrow-small.png'


function Snake(){
    return(
        <div className="snake">
            <div className="snake_text_block">
                <div className="snake_title">
                    <p>HOW WE BUILD</p>
                    <div className="snake_subtitle">
                        <p >WITH HYDRA VR?</p>
                        <img src={arrow} alt=""></img>
                    </div>
                
                </div>
                <div className="snake_text">
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>
            <div className="snake_round">
                <img src={vector} alt=""></img>
                <div className="snake_round_shadow">
                    <div className="snake_round_color">
                        01
                    </div>
                </div>
                <div className="snake_round_shadow">
                    <div className="snake_round_color">
                        02
                    </div>
                </div>
                <div className="snake_round_shadow">
                    <div className="snake_round_color">
                        03
                    </div>
                </div>
                <div className="snake_round_shadow">
                    <div className="snake_round_color">
                        04
                    </div>
                </div>
            </div>
            <div className="snake_round_text">
                
                <div className="round_text_block">
                        <img src={arrowS} alt=""></img>
                        <p>3D Conception & Design</p>
                    
                </div>
                <div className="round_text_block">
                        <img src={arrowS} alt=""></img>
                        <p>Interaction Design</p>
                    
                </div>
                <div className="round_text_block">
                        <img src={arrowS} alt=""></img>
                        <p>VR World User Testing</p>
                
                </div>
                <div className="round_text_block">
                        <img src={arrowS} alt=""></img>
                        <p>Hydra VR Deploy</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Snake