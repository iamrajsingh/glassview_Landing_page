import React, { useState } from "react";
import "./InnovationSection.css";
import InnovationData from "./InnovationData";
import leftBtn from "./images/left-btn.webp";
import rightBtn from "./images/right-btn.webp";

const InnovationSection = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextCard = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };


  const prevCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="InnovationSection" id="innovation">
      <div className="InnBtns1">
        <img className="leftBtn " src={leftBtn} onClick={prevCard} />
      </div>

      {InnovationData.map((item, index) => {
        return (
          <div
            className={
              index === current ? "slide active InnovationCard" : "slide"
            }
            key={index}
          >
            {index === current && (
              <>
                <div className="InnCardContent">
                  <p data-aos="fade-up" style={{ color: "blue" }}>Innovation</p>
                  <h1 data-aos="fade-up" className="InnovationHeading">{item.title}</h1>
                  <p data-aos="fade-up"
                    style={{
                      paddingTop: "15px",
                      fontSize: "12pt",
                      color: "#4f4f4f", 
                      fontWeight: "400",
                      textAlign: "justify"
                    }}
                  >
                    {item.para}
                  </p>
                  <div data-aos="fade-up" className="InnReadMore"><p className="InnReadMorePara">Read more</p><img src={rightBtn} className="InnReadMoreLogo"/></div>
                </div>

                <div className="InnCardImg">
                  <img data-aos="zoom-in"
                    className="InnovationImage"
                    src={item.image}
                    alt="default"
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="InnBtns2">
        <img className="rightBtn" src={rightBtn} onClick={nextCard} />
      </div>

      {/* <div className="ResponsiveBtn">
        <img className="leftBtn Innbtn" src={leftBtn} onClick={prevCard} />

        <img className="rightBtn Innbtn" src={rightBtn} onClick={nextCard} />
      </div> */}
    </section>
  );
};

export default InnovationSection;
