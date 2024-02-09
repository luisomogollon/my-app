import React from "react";
import "./Main.css";
import Icon1 from "../assets/img/icon.png";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: "2%",
        paddingBottom: "2%",
      }}
    >
      <p style={{ fontWeight: "bold", width: "300px", textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <img
        src={Icon1}
        alt="prb_header"
        style={{ objectFit: "fill", height: "120px", width: "200px" }}
      />
      <p style={{ fontWeight: "bold", width: "200px", textAlign: "center" }}>
        All rights reserved to Lorem Ipsum© 2022
      </p>
    </footer>
  );
};

export default Footer;
