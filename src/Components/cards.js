import React from "react";
import first from '../img/cards/first.png'
import second from '../img/cards/second.png'
import third from '../img/cards/third.png'
import fourth from '../img/cards/fourth.png'

function Cards(){
    return(
        <div className="cards">
            <div className="cards_block">
                <div className="card">
                <div className="card_image">
                    <img src={first} alt= ''></img>
                    </div>
                    <div className="card_title">
                    <p>SIMULATION</p>
                    </div>
                    <div className="card_text">
                    <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.</p>
                    </div>
                    <div className="card_btn">
                    <button>TRY IT NOW</button>  
                    </div>
                </div>
                
            </div>
            <div className="cards_block">
                <div className="card">
                    <div className="card_image">
                        <img src={second} alt= ''></img>
                    </div>
                    <div className="card_title">
                        <p>EDUCATION</p>
                    </div>
                    <div className="card_text">
                        <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.</p>
                    </div>
                    <div className="card_btn">
                        <button>TRY IT NOW</button>  
                    </div>
                </div>
            </div>
            <div className="cards_block">
                <div className="card">
                     <div className="card_image">
                        <img src={third} alt= ''></img>
                    </div>
                    <div className="card_title">
                        <p>SELF-CARE</p>
                    </div>
                    <div className="card_text">
                        <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.</p>
                    </div>
                    <div className="card_btn">
                        <button>TRY IT NOW</button>  
                    </div>
                </div>
            </div>
            <div className="cards_block">
                <div className="card">
                    <div className="card_image">
                        <img src={fourth} alt= ''></img>
                    </div>
                    <div className="card_title">
                        <p>OUTDOOR</p>
                    </div>
                    <div className="card_text">
                        <p>Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.</p>
                    </div>
                    <div className="card_btn">
                        <button>TRY IT NOW</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards