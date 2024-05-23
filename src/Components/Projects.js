import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ccalpic from "./Images/ccalc.png";
import artpic from "./Images/webscrap.png";
import cpic from "./Images/cby.png";
import dnbpic from "./Images/drnb.png";
import fapic from "./Images/faceauthen.png";
import aura from "./Images/artweb.png";
function Projects(){
    const alignCenter={display: 'flex', alignItems: 'center'}
    return (
        <div id="work">
            <div className='projects'>
                <Parallax pages={7}>
                    <ParallaxLayer sticky={{start:1, end:6}} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className="cardp">
                            <h1>PROJECTS</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.5} style={{ ...alignCenter, justifyContent: 'end' }}>
                    <div className='card'>
                        <img src={ccalpic}></img>
                        <h1>Currency Calculator</h1>
                        <p>Converting and Calculating different Currencies using currency API </p>
                        <button>View Project</button>              
                    </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} speed={0.5} style={{ ...alignCenter, justifyContent: 'end' }}>
                    <div className='card'>
                        <img src={artpic}></img>
                        <h1>Web Scraping</h1>
                        <p>Fetched the Amazon's top 10 best Selling Books using Python's Web Scraping tools</p>
                        <button>View Project</button>
                    </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0.5} style={{ ...alignCenter, justifyContent: 'end' }}>
                    <div className='card'>
                        <img src={aura}></img>
                        <h1>My Art Website</h1>
                        <p>Converting and Calculating different Currencies using currency API </p>
                        <button>View Project</button>              
                    </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={1.5} style={{ ...alignCenter, justifyContent: 'end' }}>
                    <div className='card'>
                        <img src={cpic}></img>
                        <h1>Calculator</h1>
                        <p>Made a Simple Calculator using HTML, CSS and JavaScipt </p>
                        <button>View Project</button>
                    </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} speed={1.5} style={{ ...alignCenter, justifyContent: 'end' }}>
                    <div className='card'>
                        <img src={dnbpic}></img>
                        <h1>Documentation</h1>
                        <p>Developed a web page for documenting the work of Dr. Norman Borlaug</p>
                        <button>View Project</button>
                    </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} speed={1.5} style={{ ...alignCenter, justifyContent: 'end' }}>
                    <div className='card'>
                        <img src={fapic}></img>
                        <h1>Face Authentication</h1>
                        <p>Developed a Face Detection and Authentication System to log-in into a website</p>
                        <button>View Project</button>
                    </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </div>
    )
}
export default Projects;