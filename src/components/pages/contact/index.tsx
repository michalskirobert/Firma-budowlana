import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

import contact from "@assets/images/contact/contact.jpg";

import { AiOutlineMail, MdPerson, AiFillPhone } from "react-icons/all";
import * as S from "./styles";

const Contact = () => {
  return (
    <section style={{ margin: "0 auto", maxWidth: "1200px", padding: "15px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Kontakt</h2>
      <S.Container>
        <S.ImageContainer>
          <img src={contact} alt="empty yet :)" />
        </S.ImageContainer>
        <S.InputContainer>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <MdPerson style={{ height: "35px" }} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Np. Janusz Kowalski" type="text" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <AiOutlineMail style={{ height: "35px" }} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Np. Kowalski@gmail.com" type="email" />
          </InputGroup>
          <InputGroup
            style={{
              maxWidth: "250px",
              objectFit: "cover",
            }}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <AiFillPhone style={{ height: "35px" }} />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Np. 555-888-555" type="tel" />
          </InputGroup>
          <InputGroup>
            <Input placeholder="Twoja wiadomość" type="textarea" />
          </InputGroup>
          <Button>Wyślij</Button>
        </S.InputContainer>
      </S.Container>
    </section>
  );
};

export default Contact;
