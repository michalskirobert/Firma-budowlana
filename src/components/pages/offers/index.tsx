import React from "react";

import * as CONSTANTS from "@utils/constants";

import CoverPicture from "@assets/images/gallery/20210613_141509_HDR.jpg";

import { OFFERS_HELER } from "../home/utils";

const OffersPage = (): JSX.Element => {
  return (
    <section className="offers">
      <div className="offers-container">
        <div>
          <h1>Oferta</h1>
          <p>
            Naszą ofertę kierujemy do osób, które chcą mieć rzetelnie i
            dokładnie wykonany remont zgodnie ze swoimi oczekiwaniami. Robimy
            remonty kapitalne, jak i wykończeniowe obiektów w stanie
            deweloperskim, a także wtórym. Naszą współpracę zaczynamy od
            oględzin obiektu oraz zapoznaniem się oczekiwaniami. Klienta, po
            uwzględnieniu zakresu prac dajemy wstępną wycenę.
          </p>
          <b>Oferujemy między innymi:</b>
          <ul className="offer">
            {OFFERS_HELER.map((offer) => (
              <li>{offer}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={CoverPicture} alt={CONSTANTS.LOGO_TEXT} />
        </div>
      </div>
    </section>
  );
};

export default OffersPage;
