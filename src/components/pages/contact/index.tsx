import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

import { contactItems, contactInputsHelper } from "./utils";

import * as S from "./styles";

const Contact = (): JSX.Element => {
  return (
    <S.ContactSection>
      <S.Title>Kontakt</S.Title>
      <S.Container>
        <S.DescriptionContainer>
          {contactItems.map(({ title, content, icon }) => (
            <S.DescriptionGroup key={content}>
              {icon}
              <div>
                <S.DescriptionSubHeadling>{title}</S.DescriptionSubHeadling>
                <S.DescriptionContent>{content}</S.DescriptionContent>
              </div>
            </S.DescriptionGroup>
          ))}
        </S.DescriptionContainer>
        <S.InputContainer>
          {contactInputsHelper.map(({ type, icon, placeholder }) => (
            <InputGroup>
              {icon && (
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>{icon}</InputGroupText>
                </InputGroupAddon>
              )}
              <Input {...{ type, placeholder }} key={placeholder} />
            </InputGroup>
          ))}
          <Button {...{ type: "button", color: "warning" }}>Wyślij</Button>
        </S.InputContainer>
      </S.Container>
    </S.ContactSection>
  );
};

export default Contact;
