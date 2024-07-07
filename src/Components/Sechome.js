import React from "react";
import mypic from "./Images/mypic.png";
import ph from "./Images/Phone.png";
import loc from "./Images/Location.png";
import mail from "./Images/Email.png";
function Sechome(){
    return(
        <>
        <div className="sech" id="about">
            <div className="content">
                <h1>Hello,<br></br>
                    I'm Yogita !
                </h1>
                <p className="contp">
                    I am a Python programmer and a web developer based in India with extensive problem solving skills. I am currently a 4th year student persuing my B.Tech in Computer Science and Engineering.
                    I am an Artist and a Founder of a Tech community at my College. 
                </p>
                <div className="lkp"><a href="https://www.linkedin.com/in/yogita-choudhary-286942201/" target="_blank" rel="noreferrer">Linkedin.com/in/Yogita-choudhary</a></div>
            </div>
            <div className="conthome">
                <div className="rectgreen"></div>
                <img src={mypic} alt="mypic"></img>
                <div className="imgcont">
                <h2>Contact</h2>
                <ul>
                    <li><img src={loc} className="contliimg" alt="location"></img>Haryana, India</li>
                    <li><img src={mail} className="contliimg" alt="email"></img>yogita.14.cdy@gmail.com</li>
                    <li><img src={ph} className="contliimg" alt="number"></img>9024838217</li>
                </ul>
                </div>
                <div className="dob blocbut"> 14th January 2002</div>
                <div className="country blocbut">Indian</div>
            </div>
        </div>
        </>
    )
}
export default Sechome;