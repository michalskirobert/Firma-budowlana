import React from "react";
import { useHistory } from "react-router-dom";

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
            {OFFERS_HELER.map((offer) => (
              <li>{offer}</li>
            ))}
          </ul>
          <hr className="my-2" />
          <p>
            <MdArrowForward /> Zapraszamy Warszawa i okolice
          </p>
          <p>
            <Button
              color="primary"
              {...{ onClick: () => history.push("/offers") }}
            >
              {CONSTANTS.SEE_MORE}
            </Button>
          </p>
        </Jumbotron>
      </section>
      <section>
        <CardGroup>
          {INFO.map(
            ({ title, subtitle, content, button, imgURL }, index: number) => (
              <>
                <Card style={{ margin: "15px 15px 30px 15px" }} key={index}>
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
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {subtitle}
                    </CardSubtitle>
                    <CardText>{content}</CardText>
                    <Button {...{ onClick: () => handleModals(title) }}>
                      {button}
                    </Button>
                  </CardBody>
                </Card>
              </>
            )
          )}
        </CardGroup>
      </section>
      {isDoorInstallationModalOpen && (
        <CustomModal
          {...{
            isOpen: isDoorInstallationModalOpen,
            content:
              "Drzwi wejściowe to w dużej mierze wizytówka domu. Ich wygląd wpływa na to, jak prezentuje się cała elewacja, a parametry wpływają na poziom domowego komfortu. Aby drzwi zewnętrzne dobrze spełniały swoją rolę, muszą jednak zostać prawidłowo zamontowane. Ich montaż tymczasem to sprawa dość skomplikowana. Aby odpowiednio zamontować drzwi wejściowe, potrzeba wiedzy i umiejętności, należy także wziąć pod uwagę wiele czynników – na przykład rodzaj ściany, do której montowane będą drzwi, wytrzymałość muru i specyfikę konkretnego projektu. Źródło: dako.eu",
            title: CONSTANTS.DOOR_INSTALLATION,
            toggle: toggleDoorInstallationModal,
            buttonContent: "Więcej informacji",
            onAction: () =>
              window.open(
                "https://www.dako.eu/pl/blog/warto-wiedziec-o-montazu-drzwi-zewnetrznych",
                "_blank"
              ),
          }}
        />
      )}
      {isFittingsInstallationModalOpen && (
        <CustomModal
          {...{
            isOpen: isFittingsInstallationModalOpen,
            content:
              "Piękno to przy funkcjonalności czynnik drugorzędny, przynajmniej w kwestii naszego mieszkania. Oczywiście jedno nie wyklucza drugiego, jeśli jednak rzeczywiście mamy być dumni i szczęśliwi w swoich czterech ścianach, koniecznie powinniśmy na pierwszym miejscu zadbać o niezawodność sprzętu, jaki jest podłączony w poszczególnych pomieszczeniach.",
            title: CONSTANTS.FITTINGS_INSTALLATION,
            toggle: toggleFittingsInstallationModal,
            buttonContent: "Więcej informacji",
            onAction: () =>
              window.open(
                "https://www.castorama.pl/na-czym-polega-bialy-montaz-ins-65575.html",
                "_blank"
              ),
          }}
        />
      )}
      {isDrainInstallationModalOpen && (
        <CustomModal
          {...{
            isOpen: isDrainInstallationModalOpen,
            content:
              "Odpływ liniowy (rynienka prysznicowa, odwodnienie liniowe, odpływ łazienkowy, rynienka łazienkowa, listwa odpływowa, listwa łazienkowa) – element armatury hydraulicznej, której celem jest grawitacyjny odbiór wody w pomieszczeniach (łazienka, basen, garaż, itp) lub na zewnątrz (podjazdy, otoczenie budynku itp) i odprowadzenie jej przez syfon do rury kanalizacyjnej. Odpływy liniowe to naturalne rozwinięcie odpływu punktowego znanego najczęściej jako kratka ściekowa.",
            title: CONSTANTS.DRAIN_INSTALLATION,
            toggle: toggleDrainInstallationModal,
          }}
        />
      )}
    </>
  );
};

export default Homepage;
