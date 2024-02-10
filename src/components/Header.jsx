import React from "react";
import "./Header.css"; // Importa el archivo CSS
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div>
        <div className="menuLateral">
          <i className="fab fa-facebook" style={{ color: "white" }}></i>
          <i className="fab fa-twitter" style={{ color: "white" }}></i>
          <i className="fab fa-instagram" style={{ color: "white" }}></i>
          <i className="fab fa-youtube" style={{ color: "white" }}></i>
          <i className="fab fa-tiktok" style={{ color: "white" }}></i>
        </div>
        <span className="isLive">
          Live &nbsp;&nbsp;<i className="fa-solid fa-satellite-dish"></i>{" "}
        </span>
        <span> Lorem ipsu dolor sit amet </span>
        <span className="isJoin">
          <Link
            activeClass="active"
            to="sectionId"
            spy={true}
            smooth={true}
            duration={1000}
          >
           Join Now &nbsp;&nbsp;<i class="fa-solid fa-circle-play"></i>
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;

