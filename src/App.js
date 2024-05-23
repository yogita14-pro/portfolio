import React from "react";
import Navbar from "./Components/Navbar";
import Hpage from "./Components/Hpage";
import Sechome from "./Components/Sechome";
import Thirdpage from "./Components/Thirdpage";
import Activites from "./Components/Activities";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App(){
  return(
    <>
    <Navbar/>
    <Hpage/>
    <Sechome />
    <Thirdpage />
    <Activites/>
    <Projects/>
    <Footer/>
    </>
 )
}

export default App;