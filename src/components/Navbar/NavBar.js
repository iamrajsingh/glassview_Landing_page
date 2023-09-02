import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [navColor, setNavColor] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(true);

  // on click close menu
  useEffect(() => {
    if (!open) {
      document.getElementById("close").click();
    }
  }, [open]);

  // on click close menu
  const navopen = () => {
    if (active === "nav_menu nav_active") {
      setOpen(false);
    }
  };

  // set navbar on small device and change navbar color
  const navToggle = () => {
    if (active === "nav_menu") {
      setOpen(true);
      setNavColor(true);
      setActive("nav_menu nav_active");
    } else {
      setActive("nav_menu");
      setNavColor(false);
    }

    // Toggler icon
    if (toggleIcon === "nav_toggler") {
      setToggleIcon("nav_toggler toggle");
    } else {
      setToggleIcon("nav_toggler");
    }
  };

  // on scroll background change
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`${navColor ? "navColor" : "navBar"} ${
        navbar ? "navBar activate" : "navBar"
      }`}
    >
      <div className="NavbarHamburger">
        <div id="close" onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>

      <div className="NavbarLogo">
        <Link className="logo" to="#" smooth>
          Glassimage
        </Link>
      </div>
      <nav>
        <ul onClick={navopen} className={active}>
          <li className="nav_item">
            <Link className="nav_link" to="#About" smooth>
              About
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#AdsSection" smooth>
              Advertisers
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#project" smooth>
              Projects
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#AdsCategory" smooth>
              Category
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#unique" smooth>
              viewers
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#innovation" smooth>
              Innovation
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#press" smooth>
              Press
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="#Footer" smooth>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
