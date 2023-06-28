import React from "react";
import arrow from "../img/arrow-small-right.png"
import mask from "../img/Mask group.png"

function Main (){
return(
   <div className="main"> 
        <div className="main_text">
            <div className="main_title">
                <p><span>Dive</span> Into The Depths</p>
                <p>Of <span>Virtual Reality</span> </p>
            </div>
            <div className="main_subtitle">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
            </div>
            <div className="main_btn">
                <div className="main_button" > 
                    <a  href='#header'>BUILD YOUR WORLD</a>
                </div>
                <div className="main_arrow">
                    <img  src={arrow} alt="arrow"></img>
                </div>
            </div>
        </div>
        <div className="main_image">
            <img src={mask} alt="mask"></img>
        </div>
   </div>
)
}

export default Main;