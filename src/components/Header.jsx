import React from "react";
import "./Header.css"; // Importa el archivo CSS

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
        <span class="isLive">
          Live &nbsp;&nbsp;<i class="fa-solid fa-satellite-dish"></i>{" "}
        </span>
        <span> Lorem ipsu dolor sit amet </span>
        <span class="isJoin">
          {" "}
          Join Now &nbsp;&nbsp;<i class="fa-solid fa-circle-play"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
