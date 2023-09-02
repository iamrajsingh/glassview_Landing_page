import React from "react";
import "./Footer.css";
import fb from "./img/fb.webp";
import insta from "./img/instagram.webp";
import linkedIn from "./img/linkedin.webp";
import twitter from "./img/twitter.webp";
import youtube from "./img/youtube.webp";

const Footer = () => {
  return (
    <section className="footer" id="Footer">
      <div className="footerInner">
        <div className="footerTop">
          <div data-aos="fade-up" className="footerTopFirst">
            <div >
              <h1 style={{marginRight: "15px"}}>Take your digital marketing to the next level</h1>
              <p style={{ fontSize: "13pt", fontWeight: "300", paddingTop: "15px" }}>
                Start marketing with Glassview and build your brand.
              </p>
            </div>

            <h1 style={{ paddingTop: "15px" }} className="footerHeading">Get in Touch</h1>
          </div>
        </div>

        <div className="footerDivider"></div>

        <div className="footerCenter">
          <div data-aos="fade-up">
            <fieldset className="footerList">
              <legend style={{ fontSize: "18pt" }}>Innovation</legend>
              <ul style={{ fontSize: "10pt", paddingTop: "10px" }}>
                <li>
                  <a href="#">GlassView Effect</a>
                </li>
                <li>
                  <a href="#">Smart Gamma</a>
                </li>
                <li>
                  <a href="#">Emotion Based Targeting</a>
                </li>
                <li>
                  <a href="#">Job Title Targeting</a>
                </li>
                <li>
                  <a href="#">IoT & Wearables</a>
                </li>
                <li>
                  <a href="#">Metaverse Gaming</a>
                </li>
              </ul>
            </fieldset>
          </div>

          <div data-aos="fade-up">
            <fieldset className="footerList" >
              <legend style={{ fontSize: "18pt" }}>Products</legend>
              <ul style={{ fontSize: "10pt", paddingTop: "10px" }}>
                <li>
                  <a href="#">Web</a>
                </li>
                <li>
                  <a href="#">Mobile & Tablet</a>
                </li>
                <li>
                  <a href="#">Gaming</a>
                </li>
                <li>
                  <a href="#">Metaverse</a>
                </li>
                <li>
                  <a href="#">IOT & Wearables</a>
                </li>
                <li>
                  <a href="#">CTV</a>
                </li>
              </ul>
            </fieldset>
          </div>

          <div data-aos="fade-up" className="FooterIcon">
            <a href="#">
              <img className="footerSocial" src={fb} />
            </a>
            <a href="#">
              <img className="footerSocial" src={insta} />
            </a>
            <a href="#">
              <img className="footerSocial" src={linkedIn} />
            </a>
            <a href="#">
              <img className="footerSocial" src={twitter} />
            </a>
            <a href="#">
              <img className="footerSocial" src={youtube} />
            </a>
          </div>
        </div>

        <div className="footerDivider"></div>

        <div  className="footerBottom">Designed by Anonymous</div>
      </div>
    </section>
  );
};

export default Footer;
