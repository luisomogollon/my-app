import React from "react";
import Pic5 from "../assets/img/Pic5.png";
import Pic1 from "../assets/img/Pic1.png";
import "./Main.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="threeCard">
        <div className="threeCardContent">
          <p className="textCardThree">
            Lorem ipsum dolor sit amet, consetetur
          </p>
          <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
          <button className="btnThreeCard2">LOREM IPSUM DOLOR SIT AMET</button>
        </div>
        <img src={Pic5} alt="pic5" className="threeCardImage" />
      </div>
      <div className="fourCard">
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Latest videos</h1>
        <div className="fourCardContent">
          <div className="fourCardFile">
            <i
              className="fa-solid fa-play"
              style={{ position: "absolute", color: "white" }}
            ></i>
            <img
              src={Pic1}
              alt="file"
              style={{ objectFit: "cover", maxWidth: "250px" }}
            />
            <p style={{ marginTop: "5%" }}>
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="fourCardFile">
            <i
              className="fa-solid fa-play"
              style={{ position: "absolute", color: "white" }}
            ></i>
            <img
              src={Pic1}
              alt="file"
              style={{ objectFit: "cover", maxWidth: "250px" }}
            />
            <p style={{ marginTop: "5%" }}>
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="fourCardFile">
            <i
              className="fa-solid fa-play"
              style={{ position: "absolute", color: "white" }}
            ></i>
            <img
              src={Pic1}
              alt="file"
              style={{ objectFit: "cover", maxWidth: "250px" }}
            />
            <p style={{ marginTop: "5%" }}>
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="fourCardFile">
            <i
              className="fa-solid fa-play"
              style={{ position: "absolute", color: "white" }}
            ></i>
            <img
              src={Pic1}
              alt="file"
              style={{ objectFit: "cover", maxWidth: "250px" }}
            />
            <p style={{ marginTop: "5%" }}>
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="fourCardFile">
            <i
              className="fa-solid fa-play"
              style={{ position: "absolute", color: "white" }}
            ></i>
            <img
              src={Pic1}
              alt="file"
              style={{ objectFit: "cover", maxWidth: "250px" }}
            />
            <p style={{ marginTop: "5%" }}>
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
          <div className="fourCardFile">
            <i
              className="fa-solid fa-play"
              style={{ position: "absolute", color: "white" }}
            ></i>
            <img
              src={Pic1}
              alt="file"
              style={{ objectFit: "cover", maxWidth: "250px" }}
            />
            <p style={{ marginTop: "5%" }}>
              Lorem ipsum dolor sit amet, consetetur
            </p>
          </div>
        </div>
        <button className="btnFourCard">VIEW ALL</button>
      </div>
    </section>
  );
};

export default Hero;
