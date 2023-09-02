import React from "react";
import "./WorkPage.css";
import "aos/dist/aos.css";
import rightGobtn from "../images/right-btn.webp";

const WorkPage = () => {
  return (
    <div className="workPage">
      <div className="workContent" data-aos="fade">
        <p className="workPara" style={{textAlign: "justify"}}>
          With this audience and our own proprietary and partner dashboards,
          we've tracked over 910 billion video and images views online.
        </p>
        <div className="workPara">
          <h1 className="workTitle">Selected works</h1>
          <img style={{height: "55px", marginTop: "15px", cursor: "pointer"}} src={rightGobtn}/>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
