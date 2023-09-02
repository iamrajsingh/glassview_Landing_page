import React from "react";
import AdsCard from "./AdsCard";
import "./AdsCategorySection.css";

const AdsCategorySection = () => {
  return (
    <section >
      <div className="AdsCategory" id="AdsCategory">
        <h1  className="CategoryTitle" data-aos="zoom-in-up">Evolve your advertisments on</h1>
      </div>
      <div className="CardSection">
        <AdsCard />
      </div>
    </section>
  );
};

export default AdsCategorySection;
