import React from "react";
import { Spinner } from "reactstrap";

export const CustomLoader = (): JSX.Element => {
  return (
    <div id="cupcake" className="box">
      <span className="letter">W</span>
      <span className="letter box">C</span>
      <span className="letter box">Z</span>
      <span className="letter box">Y</span>
      <span className="letter box">T</span>
      <span className="letter box">Y</span>
      <span className="letter box">W</span>

      <div className="cupcakeCircle box">
        <div className="cupcakeInner box">
          <div className="cupcakeCore box"></div>
        </div>
      </div>
      <span className="letter box">N</span>
      <span className="letter box">I</span>
      <span className="letter box">E</span>
    </div>
  );
};
