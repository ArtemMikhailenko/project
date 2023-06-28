import React from "react";
import mail from "../img/mail.png"
import phone from "../img/phone-call.png"
import location from "../img/Location-Icon.png"

function Contact(){
    return(
        <div className="contact_block">
            <div className="contact_block_adress">
                <div className="location_image">
                <img src={location} alt=""></img>
                </div>
                <div className="location_text">
                    <p>Pay Us a Visit</p>
                    <a href="https://www.google.com/maps/place/Union+St,+Seattle,+WA+98101,+%D0%A1%D0%A8%D0%90/@47.6099139,-122.3363054,17z/data=!3m1!4b1!4m6!3m5!1s0x54906ab465f9a32d:0x2b0d2afe1e719e15!8m2!3d47.6099139!4d-122.3341167!16s%2Fg%2F1vcq795y?entry=ttu" target="blank">Union St, Seattle, WA 98101, United States</a>
                </div>
            </div>
            <div className="contact_block_phone">
                <div className="phone_image">
                    <img src={phone} alt=""></img>
                </div>
                <div className="phone_text">
                    <p>Give Us a Call</p>
                    <a href="tel:11011111010">(110) 1111-1010</a>
                </div>
            </div>
            <div className="contact_block_mail">
                <div className="mail_image">
                    <img src={mail} alt=""></img>
                </div>
                <div className="mail_text">
                    <p>Send Us a Message</p>
                    <a href="mailto:Contact@HydraVTech.com">Contact@HydraVTech.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;