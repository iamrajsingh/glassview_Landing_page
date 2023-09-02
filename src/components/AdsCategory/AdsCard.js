import React from "react";
import cardData from "./cardData";

const AdsCard = () => {
  return (
    <>
      {cardData.map((item, index) => (
          <div className="card" key={index} data-aos="zoom-in">
            <img src={item.imgsrc} style={{ height: "150px" }} />
            <div className="container">
              <h1 style={{ fontSize: "30pt" }}>{item.title}</h1>
              <p style={{ color: "#4f4f4f", marginTop: "30px", }}>{item.desc}</p>
            </div>
          </div>
      ))}
    </>
  );
};

export default AdsCard;
