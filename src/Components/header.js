import React from "react";
import logo from "../img/Frame.png"
import namelogo from "../img/Hydra.png"
function Header (){
return(
    <header id="up">
      <div className="logo_block">
        <img className="logo" src={logo} alt="logo" />
        <img className="name_logo" src={namelogo} alt="name_logo" ></img>
      </div>
      <div className="hat_block">
      <a href='#header'> action</a>
        <p className="two" >Services</p>
        <p className="three" >Technologies</p>
        <p>How to</p>
      </div>
      <div className="header_btn">
        <a className="header_btn_one" href="#header">contact us</a>
        <a className="header_btn_two" href="#header">join Hydra</a>
      </div>
    </header>
)
}

export default Header;