import React, { Component } from "react";

import first from "@assets/images/hero/1.jpg";
import second from "@assets/images/hero/2.jpg";
import third from "@assets/images/hero/3.jpg";
import Slider from "react-slick";

const Hero = (): JSX.Element => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={first}
          style={{
            width: "100vw",
            height: "calc(100vh - 25vh)",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <img
          src={second}
          style={{
            width: "100vw",
            height: "calc(100vh - 25vh)",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <img
          src={third}
          style={{
            width: "100vw",
            height: "calc(100vh - 25vh)",
            objectFit: "cover",
          }}
        />
      </div>
    </Slider>
  );
};

export default Hero;
