import React from "react";
import "./Nav.css"; // Importa el archivo CSS
import { Link } from "react-scroll";
import imagenes from "../assets/img/imagenes";

const Nav = () => {
  return (
    <nav>
      <img src={imagenes.img0} alt="prb_header" className="Navbackground" />
      <div className="contentNav">
        <div className="headerNav">
          <img src={imagenes.img1} alt="grab" className="iconHeadernNav" />
          <div className="contentNavBody">
            <div className="routeNav">
              <span className="route">LOREM IPSUM</span>
              <span className="route">LOREM IPSUM</span>
              <span className="route">LOREM IPSUM</span>
              <span className="route">LOREM IPSUM</span>
              <span className="route">LOREM IPSUM</span>
              <span className="route">LOREM IPSUM</span>
            </div>
            <div className="bodyNav">
              <h1 className="bodyNavTitle">LOREM IPSUM</h1>
              <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
              <h1 className="bodyNavTitle">LOREM IPSUM</h1>
              <button className="bodyNavButton">
                <Link
                  to="whatIsNextSection"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  WHAT IS NEXT
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="footerNav">
          <div className="footerContenTextNav ">
            <p>Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="footerContenTimeNav">
            <div className="blockTime">
              <span>170</span>
              <span className="blockSpan">days</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>13</span>
              <span className="blockSpan">Hour</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>39</span>
              <span className="blockSpan">Minutes</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>29</span>
              <span className="blockSpan">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
