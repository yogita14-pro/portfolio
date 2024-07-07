import React from "react";
import link from "./Images/LinkedIn_icon.png";
import git from "./Images/github.png";
import lc from "./Images/LeetCode_Logo_1.png";
import x from "./Images/twitter-x.webp";
function Footer(){
    return(
        <footer id="footer">
            <div className="fpart1">
                <h1>Yogita Choudhary</h1>
                <ul>
                    <li>About</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Platforms</li>
                    <li>Works</li>
                </ul>
                <ul className="logo">
                    <li><a href="https://www.linkedin.com/in/yogita-choudhary-286942201/" target="_blank" rel="noreferrer"><img src={link} alt="logo-img"></img></a></li>
                    <li><a href="https://github.com/yogita14-pro" target="_blank" rel="noreferrer"><img src={git} alt="logo-img"></img></a></li>
                    <li><a href="https://leetcode.com/u/Yogita_codes/" target="_blank" rel="noreferrer"><img src={lc} alt="logo-img"></img></a></li>
                    <li><a href="https://twitter.com/yogita14_cdy" target="_blank" rel="noreferrer"><img src={x} alt="logo-img"></img></a></li>
                </ul>
            </div>
            <div className="fpart2">
                <form><h1>CONTACT ME</h1>
                    <input placeholder="Name" className="in"></input><br></br>
                    <input placeholder="Email"className="in"></input><br></br>
                    <input placeholder="Message" className="msg"></input><br></br>
                    <button>SEND</button>
                </form>
            </div>
        </footer>
    )
}
export default Footer;