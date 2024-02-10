import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Pic7 from "../assets/img/Pic7.png";
import Pic8 from "../assets/img/Pic8.png";
import Pic9 from "../assets/img/Pic9.png";
import Pic10 from "../assets/img/Pic10.png";

import "./Main.css";

const Content = () => {
  return (
    <div className="sevenCard" >
      <h1 id="VIEWALLSection" style={{ fontSize: "56px", color: "white"  }}>Lorem ipsum</h1>
      
      <Carousel 
        showArrows={true}
        showStatus={true}
        showThumbs={false}
        emulateTouch={true}
        slidesToSlide={1}
        centerSlidePercentage={37.3}
        autoPlay={true}
        swipeable={true}
        centerMode={true}
        
      >
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
       
        
        
      </Carousel>

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
