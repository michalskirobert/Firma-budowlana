import React from "react";
import { Link } from "react-router-dom";

import building from "@assets/images/about/building.jpg";

import * as CONSTANTS from "@utils/constants";

const AboutPage = (): JSX.Element => {
  return (
    <section className="about">
      <h1>O nas</h1>
      <div className="about-container">
        <div>
          <p>
            Jestesmy firma z wieloletnim doswiadczenie, w zakresie prac
            Remontowo-Wykonczeniowych Posiadamy szeroka wiedze na temat
            materialow i metod technologi remontowej , do kazdego zlecenia
            podchodzimy indywidualnie naszym celem jest zadowolenie i
            satysfakcja z wykonywanych przez nas prac.
          </p>
          <p>
            Mogą Państwo skontaktować się poprzez formularz kontaktowy
            mieszczący się <Link to={CONSTANTS.CONTANCT_ROUTE}>tutaj</Link>,
            poprzez e-mail:{" "}
            <a
              href={`mailto: kontakt@buraczynscy.pl`}
              style={{ marginRight: "5px" }}
            >
              kontakt@buraczynscy.pl
            </a>
            lub telefonicznie: <a href={`tel: +48 519 867 957`}>519 867 957</a>
          </p>
        </div>
        <div>
          <img src={building} alt={CONSTANTS.LOGO_TEXT} />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
