import React from "react";

import { useCustomComparingPictruesContainer } from "./container";

export const CustomComparingPictures = ({
  before,
  after,
}: {
  before: string;
  after: string;
}): JSX.Element => {
  const { beforeImageWidth, container, sliderLeft } =
    useCustomComparingPictruesContainer();

  return (
    <div className="compare-container" ref={container}>
      <div className="img-container-after">
        <img className="after" src={after} alt="Po remoncie" />
      </div>
      <div className="img-container-before" style={{ width: beforeImageWidth }}>
        <img className="before" src={before} alt="Przed remontem" />
      </div>
      <div className="slider" style={{ left: sliderLeft }}></div>
    </div>
  );
};
