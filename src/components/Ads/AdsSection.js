import React from "react";
import "./AdsSection.css";
import leftBtn from "./icons/left-btn.webp";
import leftRight from "./icons/right-btn.webp";
import companies from "./companies";

const AdsSection = () => {
  return (
    <section id="AdsSection">
      <div className="AdsSection">
        <div className="AdsSectionCenter">
          <div className="AdsContent">
            <h1 className="title" data-aos="fade-up">
              Advertiser
            </h1>
          </div>
        </div>
        <div className="AdsContent">
          <div className="CategoryList" data-aos="fade-up">
            <img className="LeftBtn" src={leftBtn} alt="<" />{" "}
            <div className="CategoryListName">
              <span style={{ color: "blue" }}>GENERAL</span>
              <span>FASHION/LUXURY</span>
              <span> FINANCE </span>
              <span> GOVERNMENT</span>
            </div>
            <img className="RightBtn" src={leftRight} alt=">" />
          </div>
        </div>
      </div>

      <div className="Companies">
        {companies.map((item, index) => (
          <div className="images" key={index}>
            <img src={item.imgSrc} className="image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdsSection;
