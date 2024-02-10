import React from "react";
import Pic7 from "../assets/img/Pic7.png";
import Pic8 from "../assets/img/Pic8.png";
import Pic9 from "../assets/img/Pic9.png";
import "./Main.css";

const Content = () => {
  return (
    <div className="sevenCard">
      <h1 style={{ fontSize: "56px", color: "white" }}>Lorem ipsum</h1>
      <div style={{ display: "flex", gap: "5%" }}>
        <div>
          <img
            src={Pic7}
            alt="pic"
            style={{ objectFit: "fill", width: "300px", height: "400px" }}
          />
        </div>
        <div>
          <img
            src={Pic8}
            alt="pic"
            style={{ objectFit: "fill", width: "300px", height: "400px" }}
          />
        </div>
        <div>
          <img
            src={Pic9}
            alt="pic"
            style={{ objectFit: "fill", width: "300px", height: "400px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "2%",
          width: "100%",
          justifyContent: "center",
          gap: "2%",
        }}
      >
        <i className="fas fa-circle" style={{ color: "white" }}></i>
        <i className="far fa-circle" style={{ color: "white" }}></i>
        <i className="far fa-circle" style={{ color: "white" }}></i>
      </div>
      <button
        className="btnStandar"
        style={{ color: "black", backgroundColor: "white", marginTop: "5%" }}
      >
        VIEW ALL
      </button>
    </div>
  );
};

export default Content;
