import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Jumbotron,
} from "reactstrap";
import { MdArrowForward } from "react-icons/md";

import { OFFERS_HELER } from "./utils";

import Hero from "@components/layout/hero";
import * as CONSTANTS from "@utils/constants";

const info = [
  {
    title: "Tytuł",
    subtitle: "Podtytuł",
    content: "Wartość",
    button: "Wartość przyciska ;)",
  },
  {
    title: "Tytuł",
    subtitle: "Podtytuł",
    content: "Wartość",
    button: "Wartość przyciska ;)",
  },
  {
    title: "Tytuł",
    subtitle: "Podtytuł",
    content: "Wartość",
    button: "Wartość przyciska ;)",
  },
];

const Homepage = (): JSX.Element => {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "8px" }}>
        <Jumbotron>
          <h1 className="display-3">{CONSTANTS.OFFER}</h1>
          <h2 className="lead">{CONSTANTS.OFFER_HEADER}</h2>
          <hr className="my-2" />
          <ul className="offer">
            {OFFERS_HELER.map((offer) => (
              <li>{offer}</li>
            ))}
          </ul>
          <hr className="my-2" />
          <p>
            <MdArrowForward /> Zapraszamy Warszawa i okolice
          </p>
          <p>
            <Button color="primary">{CONSTANTS.SEE_MORE}</Button>
          </p>
        </Jumbotron>
      </section>
      <section>
        <CardGroup>
          {info.map(({ title, subtitle, content, button }) => (
            <Card style={{ margin: "15px 15px 30px 15px" }}>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/318x180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {subtitle}
                </CardSubtitle>
                <CardText>{content}</CardText>
                <Button>{button}</Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </section>
    </>
  );
};

export default Homepage;
