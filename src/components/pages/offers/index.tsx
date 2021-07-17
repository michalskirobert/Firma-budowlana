import React from "react";

import { CustomComparingPictures } from "@components/shared/custom-comparing-pictrues";

import before from "@assets/images/compare/before.jpg";
import after from "@assets/images/compare/after.jpg";

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
          <p>Ceny ustalamy indywidualnie do potrzeb.</p>
        </div>
        <div>
          <CustomComparingPictures {...{ before, after }} />
        </div>
      </div>
    </section>
  );
};

export default OffersPage;
