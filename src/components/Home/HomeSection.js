import React from "react";
import "./HomeSection.css";
import Videobg from "./video/video2.mp4";
import "aos/dist/aos.css";

const HomeSection = () => {
  return (
    <div>
      <section className="HomeSection"> 
        <video src={Videobg} autoPlay loop muted />
        
        <div className="content">
          <div className="homeContent" data-aos="fade">
          <p className="Homepara">Nerd Wallet</p>
          <h1>The Why</h1>
          <h1>Behind the Buy</h1>
        </div>
        
        </div>
        
      </section>
    </div>
  );
};

export default HomeSection;
