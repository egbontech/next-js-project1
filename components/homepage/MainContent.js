import React from "react";
import Footer from "../general/Footer";
import Slider from "./mainContainer/slider/Slider";
import Welcome from "./mainContainer/Welcome";


function MainContent() {
  return (
    <div className="main-content">       
      <Slider/>  
      <Welcome />    
      <Footer/>  
    </div>
  );
}

export default MainContent;
