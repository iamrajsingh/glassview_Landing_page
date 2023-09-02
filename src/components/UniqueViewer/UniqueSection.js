import React from "react";
import "./UniqueSection.css";

import million from "./images/million.webp";

const UniqueSection = () => {
  return (
    <section className="uniqueSection" id="unique">
      <div className="uniqueSectionInner">
        <div className="uniqueSectionImg">
          <img data-aos="zoom-in" className="uniqueImg" src={million} />
        </div>
        <div className="uniqueSectionText">
          <h1 className="uniqueHeading" data-aos="fade-up">
            2.7 Billion unique viewers
          </h1>
          <p className="uniquePara" data-aos="fade-up">
            Put simply, we ensure that our brands efficiently reach the online
            audience they're seeking no matter who or where they are.
          </p>
          <p className="uniquePara" data-aos="fade-up">
            Our robust video advertising marketplace reaches over 2.7 billion
            unique viewers every month globally, across hundreds of integrated
            publisher sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
