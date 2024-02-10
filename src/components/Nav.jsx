import React from "react";
import "./Nav.css"; // Importa el archivo CSS
import { Link } from "react-scroll";
import imagenes from "../assets/img/imagenes";

const Nav = () => {
  return (
    <nav>
      <img src={imagenes.img0} alt="prb_header" class="Navbackground" />
      <div class="contentNav">
        <div class="headerNav">
          <img src={imagenes.img1} alt="grab" class="iconHeadernNav" />
          <div class="contentNavBody">
            <div class="routeNav">
              <a href="" class="route">
                LOREM IPSUM
              </a>
              <a href="" class="route">
                LOREM IPSUM
              </a>
              <a href="" class="route">
                LOREM IPSUM
              </a>
              <a href="" class="route">
                LOREM IPSUM
              </a>
              <a href="" class="route">
                LOREM IPSUM
              </a>
              <a href="" class="route">
                LOREM IPSUM
              </a>
            </div>
            <div class="bodyNav">
              <h1 class="bodyNavTitle">LOREM IPSUM</h1>
              <h1 class="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
              <h1 class="bodyNavTitle">LOREM IPSUM</h1>
              <button className="bodyNavButton">
                <Link
                  activeClass="active"
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

        <div class="footerNav">
          <div class="footerContenTextNav ">
            <p>Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div class="footerContenTimeNav">
            <div class="blockTime">
              <span>170</span>
              <span class="blockSpan">days</span>
            </div>
            <hr class="divider" />
            <div class="blockTime">
              <span>13</span>
              <span class="blockSpan">Hour</span>
            </div>
            <hr class="divider" />
            <div class="blockTime">
              <span>39</span>
              <span class="blockSpan">Minutes</span>
            </div>
            <hr class="divider" />
            <div class="blockTime">
              <span>29</span>
              <span class="blockSpan">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
