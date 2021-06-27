import React from "react";
import { toast } from "react-toastify";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

import { Formik, FormikConfig } from "formik";

import { RiMessage2Line } from "react-icons/ri";

import { contactItems, contactInputsHelper } from "./utils";

import * as CONSTANTS from "@utils/constants";
import * as S from "./styles";

const Contact = (): JSX.Element => {
  const sendMessage = ({ name, msg }: { name: string; msg: string }): void => {
    const sentMessage = `Witaj ${name}! Twoja wiadomość o treści: "${msg}", została pomyślnie wysłana`;
    toast.success(sentMessage);
  };
  return (
    <Formik
      {...{
        initialValues: { name: "", msg: "", email: "" },
        onSubmit: (values) => sendMessage(values),
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <S.ContactSection>
          <S.Title>
            {CONSTANTS.CONTACT} <RiMessage2Line style={{ color: "#ffff" }} />
          </S.Title>
          <S.Container>
            <S.DescriptionContainer>
              {contactItems.map(({ title, content, icon }, idx: number) => (
                <S.DescriptionGroup key={idx}>
                  {icon}
                  <div>
                    <S.DescriptionSubHeadling>{title}</S.DescriptionSubHeadling>
                    <S.DescriptionContent>{content}</S.DescriptionContent>
                  </div>
                </S.DescriptionGroup>
              ))}
            </S.DescriptionContainer>
            <S.InputContainer>
              {contactInputsHelper.map(
                ({ type, icon, placeholder, name }, idx: number) => (
                  <InputGroup key={idx}>
                    {icon && (
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ opacity: "0.9" }}>
                          {icon}
                        </InputGroupText>
                      </InputGroupAddon>
                    )}
                    <Input
                      {...{
                        type,
                        placeholder,
                        style: { opacity: "0.9" },
                        onChange: handleChange,
                        name,
                        invalid: errors[name],
                        value: values[name],
                      }}
                      key={placeholder}
                    />
                    <FormFeedback>{errors[name]}</FormFeedback>
                  </InputGroup>
                )
              )}
              <Button
                {...{
                  type: "button",
                  color: "warning",
                  onClick: () => handleSubmit(),
                }}
              >
                {CONSTANTS.SEND}
              </Button>
            </S.InputContainer>
          </S.Container>
        </S.ContactSection>
      )}
    </Formik>
  );
};

export default Contact;
