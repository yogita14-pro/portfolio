import React from "react";

function Thirdpage(){
    return(
        <>
        <div id="third">
        <div className="leftcont">
            <div className="edu">
                <h1>Education</h1>
                <hr className="verticallineone"></hr>
                <ul>
                    <li>
                        <h3>2020-24</h3>
                        <h4>University Institute of Engineering and Technology,Rohtak
                            <p>B.Tech - Computer Science and Engineering</p>
                        </h4>
                    </li>
                    <li>
                        <h3>2017-19</h3>
                        <h4>Step By Step Public School, Alwar,Rajasthan
                            <p>Non-Medical</p> 
                        </h4>
                    </li>
                </ul>
            </div>
            <div className="exp">
                <h1>Experience</h1>
                <ul>
                    <li>
                        <h3>2023-24</h3>
                        <div className="fed"><h3>Community Founder and Technical Head</h3>
                            <p>Founded a Community at my College named Developers Network Society and mentored the Technical Team. Lead the Several Technical events.</p>
                        </div>
                    </li>
                    <li>
                        <h3>2022-22</h3>
                        <div className="fed"><h3>Front-end Development Internship</h3>
                            <p>Build the front-end part of the Website of the company. Collaborated with the Team using Github and used wireframing for the designs</p>
                        </div>
                    </li>
                    <li>
                        <h3>2021-22</h3>
                        <div className="fed"><h3>Teaching Head at an NGO</h3>
                            <p>Taught the Slum kids and helped them in the preparation of several compititive exams. Managed the Teaching Team and handled the events which helped in the growth of the kids.</p>
                        </div>

                    </li>
                </ul>
                <div className="buttonsts">
                <button>#Communication</button>
                <button>#Leadership</button>
                <button>#Writing</button>
                <button>#Event Management</button>
                <button>#Writing</button>
                <button>#Leadership</button>
                </div>
            </div>
            
        </div>
        <div className="rightcont">
            <h1>RESUME</h1>
            <h1>RESUME</h1>
            <h1>RESUME</h1>
            <div className="innrc">
                <h2>Technical skills</h2>
                <h3>Coding Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Pyhton</li>
                        <li>React</li>
                        <li>Django</li>
                        <li>MySQL</li>
                    </ul>
            </div>
            <div className="buttonsts">
                <button>Linux</button>
                <button>Windows</button>
            </div>
            <div className="lang">
                <h1>Language</h1>
                <div className="lang-cont">
                <div>
                <h2>English</h2>
                    <p>Fluent</p>
                </div>
                <div>
                <h2>Hindi</h2>
                    <p>Native</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Thirdpage;