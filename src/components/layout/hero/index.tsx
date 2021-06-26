import React, { Component } from "react";

import first from "@assets/images/hero/1.jpg";
import second from "@assets/images/hero/2.jpg";
import third from "@assets/images/hero/3.jpg";

import * as CONSTNATS from "@utils/constants";

const Hero = (): JSX.Element => {
  const [isReversed] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const data = [
    {
      title: "",
      subtitle: "",
      imgURL: first,
      content: "",
      currentId: 1,
    },
    {
      title: "",
      subtitle: "",
      imgURL: second,
      content: "",
      currentId: 2,
    },
    {
      title: "",
      subtitle: "",
      imgURL: third,
      content: "",
      currentId: 3,
    },
  ];

  data.map((item, index) => {
    return (item["order"] = index);
  });

  const dataOrdered = isReversed ? data.reverse() : data;

  const checkNumber = (number: number): void => {
    if (number > data.length - 1) {
      setIndex(0);
    } else {
      return setIndex(number);
    }
  };

  const getBanner = (id: number): void => {
    return setIndex(id);
  };

  React.useEffect(() => {
    const slider = setInterval(() => {
      checkNumber(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
    // eslint-disable-next-line
  });

  return (
    <section className={"hero"} style={{ padding: "0" }}>
      <div className={"hero__container"}>
        <div className={"img__container"}>
          {dataOrdered.map(({ title, subtitle, content, imgURL }, idx) => {
            return (
              <div key={idx}>
                <img
                  src={imgURL}
                  alt={title}
                  key={idx}
                  className={`${index === idx ? "active" : "remove"}`}
                />
                <div
                  className={`img__text ${index === idx ? "active" : "remove"}`}
                >
                  <h2 style={{ color: "#deb887" }}>{title}</h2>
                  <h3>{subtitle}</h3>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={"hero__content"}>
          <div className={"hero__item"}>
            <div className={"slidershow"}>
              {dataOrdered.map((item, id: number) => {
                return (
                  <button
                    key={id}
                    className={`dot ${index === id && "active"}`}
                    onClick={() => getBanner(id)}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
