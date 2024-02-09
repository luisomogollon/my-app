import React from "react";
import "./Main.css";
import Join1 from "../assets/img/Join Us.png";
import Pic6 from "../assets/img/Pic6.png";

const App = () => {
  return (
    <div>
      <div className="fiveCard">
        <img
          src={Join1}
          alt="background"
          style={{
            position: "absolute",
            width: "100%",
            objectFit: "fill",
            zIndex: -1,
            maxHeight: "800px",
          }}
        />
        <div className="formFiveCard">
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "white",
              margin: "2%",
            }}
          >
            JOIN US
          </h1>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              margin: "2%",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          </h1>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              className="inputFormBasic"
              placeholder="Name"
              style={{ marginRight: "0px", width: "100%" }}
            />
            <input
              type="text"
              className="inputFormBasic"
              placeholder="Username"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              className="inputFormBasic"
              placeholder="Phone"
              style={{ marginRight: "0px", width: "100%" }}
            />
            <input
              type="text"
              className="inputFormBasic"
              placeholder="Email"
              style={{ width: "100%" }}
            />
          </div>
          <input
            type="text"
            className="inputFormBasic"
            placeholder="Department"
          />
          <textarea
            className="inputFormBasic"
            placeholder="Message"
            style={{ height: "120px", paddingTop: "16px" }}
          ></textarea>
          <button
            className="btnStandar"
            style={{ maxWidth: "fit-content", margin: "2%" }}
          >
            I'M IN
          </button>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              marginTop: "2%",
              marginLeft: "2%",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </div>
      <div className="sixCard">
        <img
          src={Pic6}
          alt="background"
          style={{
            position: "absolute",
            width: "100%",
            objectFit: "fill",
            zIndex: -1,
            maxHeight: "600px",
          }}
        />
        <div style={{ width: "40%", marginLeft: "5%", marginTop: "10%" }}>
          <h1 style={{ fontSize: "56px" }}>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button className="btnStandar" style={{ marginTop: "10%" }}>
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
