import React from "react";
import "./IntroSection.css";
import Img1 from "./images/marketplace.webp";
import "aos/dist/aos.css";

const IntroSection = () => {
  return (
    <section id="About">
      <div className="Intro_content">
        <div className="Intro-left">
          <p
            className="para1"
            style={{ color: "blue", textAlign: "justify" }}
            data-aos="fade-up"
          >
            Designed for the Modern Internet.
          </p>
          <br />
          <h1 className="intro_title" data-aos="fade-up">
            Marketplace for brands and publishers{" "}
          </h1>
          <br />
          <p
            className="para2"
            style={{
              color: "#4f4f4f",
              fontWeight: "400",
              fontSize: "12pt",
              textAlign: "justify",
              paddingRight: "20px",
            }}
            data-aos="fade-up"
          >
            Welcome to the world's largest, coolest, independent video and image
            distribution platform.
          </p>
          <br />
          <p
            className="para3"
            style={{
              color: "#4f4f4f",
              fontWeight: "400",
              fontSize: "12pt",
              textAlign: "justify",
              paddingRight: "20px",
            }}
            data-aos="fade-up"
          >
            Simply having more data does not lead to better outcomes. It's not
            the data, it's what you do with it. At GlassView, we are inventing
            next generation tools to make better use of data, thereby empowering
            our brands to future proof their business.
          </p>
        </div>

        <div className="Intro-right" data-aos="zoom-in">
          <img className="intro_image" src={Img1} />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
