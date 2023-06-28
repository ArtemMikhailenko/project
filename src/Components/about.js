import React from "react";
import tipok from "../img/tipok.png"
import arrow from '../img/arrow-snake.png'
function About(){
    return(
    <div className="about_block">
        <div className="about_block_one">
            <div className="block_one_title">
                <div className="about_one_title">
                    <p>INTRODUCTION </p>
                    <span>TO HYDRA VR</span>
                </div>
                <img src={arrow} alt=""></img>
            </div>   
            <div className="block_one_subtitle">
                <div className="block_one_text">
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div> 
        </div>
        <div className="about_block_two">
            <div className="block_two_image">
                <img src={tipok} alt="man"></img>
            </div>
            <div className="block_two_text">
                <div className="block_two_title">
                    <div className="about_two_title">
                        <p>ABOUT </p>
                        <span>HYDRA VR</span>
                    </div>
                </div>   
                <div className="block_two_subtitle">
                    <div className="block_two_subtitletxt">
                        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                        </p>
                    </div>
                </div> 
                <div className="block_two_btn">
                    <button>LET`S GET IN TOUCH</button>
                </div>
            </div>
        </div>
        <div className="about_block_one">
            <div className="block_one_title">
                <div className="about_one_title">
                <p>WHY BUILD </p>
                <span>WITH HYDRA?</span>
                </div>
                <img src={arrow} alt=""></img>
            </div>   
            <div className="block_one_subtitle">
                <div className="block_one_text">
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div> 
        </div>
    </div>
    )
}
export default About