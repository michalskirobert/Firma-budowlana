import React from "react";
import { useHistory } from "react-router-dom";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  Jumbotron,
} from "reactstrap";
import { MdArrowForward } from "react-icons/md";
import { useHomepageContainer } from "./container";

import { OFFERS_HELER } from "./utils";
import { CustomModal } from "@components/shared/custom-modal";
import Hero from "@components/layout/hero";

import * as CONSTANTS from "@utils/constants";

const Homepage = (): JSX.Element => {
  const history = useHistory();
  const {
    INFO,
    handleModals,
    isDoorInstallationModalOpen,
    isDrainInstallationModalOpen,
    isFittingsInstallationModalOpen,
    toggleDoorInstallationModal,
    toggleDrainInstallationModal,
    toggleFittingsInstallationModal,
  } = useHomepageContainer();
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
            {OFFERS_HELER.map((offer, idx: number) => (
              <li key={idx}>{offer}</li>
            ))}
          </ul>
          <hr className="my-2" />
          <p>
            <MdArrowForward /> Zapraszamy Warszawa i okolice
          </p>
          <p>
            <Button
              color="warning"
              {...{ onClick: () => history.push("/offers") }}
            >
              {CONSTANTS.SEE_MORE}
            </Button>
          </p>
        </Jumbotron>
      </section>
      <section>
        <CardGroup>
          {INFO.map(({ title, content, button, imgURL }, idx: number) => (
            <React.Fragment key={idx}>
              <Card style={{ margin: "15px 15px 30px 15px" }}>
                <CardImg
                  top
                  width="100%"
                  src={imgURL}
                  alt={title}
                  style={{
                    objectFit: "cover",
                    maxHeight: "300px",
                  }}
                />
                <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {subtitle}
                  </CardSubtitle> */}
                  <CardText>{content}</CardText>
                  <Button {...{ onClick: () => handleModals(title) }}>
                    {button}
                  </Button>
                </CardBody>
              </Card>
            </React.Fragment>
          ))}
        </CardGroup>
      </section>
      {isDoorInstallationModalOpen && (
        <CustomModal
          {...{
            isOpen: isDoorInstallationModalOpen,
            content: CONSTANTS.DOOR_INSTALLATION_CONTENT,
            title: CONSTANTS.DOOR_INSTALLATION,
            toggle: toggleDoorInstallationModal,
          }}
        />
      )}
      {isFittingsInstallationModalOpen && (
        <CustomModal
          {...{
            isOpen: isFittingsInstallationModalOpen,
            content: CONSTANTS.FITTINGS_INSTALLATION_CONTENT,
            title: CONSTANTS.FITTINGS_INSTALLATION,
            toggle: toggleFittingsInstallationModal,
          }}
        />
      )}
      {isDrainInstallationModalOpen && (
        <CustomModal
          {...{
            isOpen: isDrainInstallationModalOpen,
            content: CONSTANTS.DRAIN_INSTALLATION_CONTENT,
            title: CONSTANTS.DRAIN_INSTALLATION,
            toggle: toggleDrainInstallationModal,
          }}
        />
      )}
    </>
  );
};

export default Homepage;
