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

import Hero from "@components/layout/hero";

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
      <section style={{ marginLeft: "50px" }}>
        <div>
          <Jumbotron>
            <h1 className="display-3">Oferta</h1>
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              explicabo laudantium, harum mollitia dicta neque quibusdam non,
              voluptate similique aperiam facilis quidem ad numquam optio
              tempore et voluptates! Rem, similique?
            </p>
            <hr className="my-2" />
            <p>Ceny</p>
            <p className="lead">
              <Button color="primary">Więcej szczegółów</Button>
            </p>
          </Jumbotron>
        </div>
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
