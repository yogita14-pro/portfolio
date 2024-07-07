import React, {useEffect, useState} from "react";
function Navbar(){
  const [backclr, setBackclr]=useState("#3a543b");
  const [clr, setClr]= useState('#F9E8D9');
  useEffect(()=>{
    const handleScroll=()=>{
    if (document.documentElement.scrollTop < 550){
      setClr('#F9E8D9');
      setBackclr("#3a543b");
    }
    else if(document.documentElement.scrollTop > 550 && document.documentElement.scrollTop < 1175 ){
      setClr("black");
      setBackclr("#F9E8D9");
    }else if(document.documentElement.scrollTop <1800 && document.documentElement.scrollTop > 1175){
      setClr("#F9E8D9");
      setBackclr("#3a543b");
    }
    else if (document.documentElement.scrollTop <2400 && document.documentElement.scrollTop > 1800){
      setClr("black");
      setBackclr("#F9E8D9");
    }
    else if (document.documentElement.scrollTop <3050 && document.documentElement.scrollTop >=2400){
      setClr("#F9E8D9");
      setBackclr("#3a543b");
    }
  };
  window.addEventListener('scroll', handleScroll);
  return()=>{
    window.removeEventListener('scroll', handleScroll);
  };
  },[]);
  
  return(
    <nav id="Nav" style={{background: backclr}}>
      <div className="star"></div>
      <h1 style={{color: clr}}>YC</h1>
      <input className="menu-btn" type="checkbox" id='menu-btn'/>
      <label className="menu-icon" for='menu-btn'>
          <span className="nav-icon"></span>
      </label>
      <ul className="menu">
      <li><a href="#about" style={{color:clr}}>About Me</a></li>
      <li><a href="https://drive.google.com/file/d/1stqbyA5T6j_0nE2yGq4MxIhPk8leF_zu/view" style={{color:clr}} target="_blank" rel="noreferrer">Resume</a></li>
      <li><a href="#work" style={{color:clr}}>Work</a></li>
        <li><a href="#footer"><button className="head-button">Get in Touch!</button></a></li>
    </ul>
    </nav>
 )
}

export default Navbar;