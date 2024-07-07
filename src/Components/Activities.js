import React from "react";
import data from "./aandrdata";
function Activites(){
    return(
        <div className="activities">
        <div className="handi">
            <h1 className="samehead">Achievements & Extra-Activites</h1>
                <ul className="conthi">
                    {data.map((item)=>(
                        <li >
                        <div className="sqli">
                        <div className="sqr"></div>
                        <h3>{item.date}</h3>
                        </div >
                        <p className="pacont">{item.content}</p>
                        </li>))}</ul>
        </div>
        <div className="acts" ><h1 className="samehead">Platforms</h1>
            <ul className="conta">
                <a href="https://www.linkedin.com/in/yogita-choudhary-286942201/" target="_blank" rel="noreferrer"><li>LinkedIn</li></a>
                <a href="https://leetcode.com/u/Yogita_codes/" target="_blank" rel="noreferrer"><li>Leetcode</li></a>
                <a href="https://github.com/yogita14-pro" target="_blank" rel="noreferrer"><li>Github</li></a>
                <a href="https://twitter.com/yogita14_cdy" target="_blank" rel="noreferrer"><li>Twitter</li></a>
            </ul>
        </div>
        </div>
    )
}
export default Activites;