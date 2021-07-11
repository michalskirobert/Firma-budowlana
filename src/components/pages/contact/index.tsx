import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

import { Formik } from "formik";

import { RiMessage2Line } from "react-icons/ri";
import { CONTACT_VALIDATION_SCHEMA } from "./validation-rules";

import { contactItems, contactInputsHelper } from "./utils";

import * as CONSTANTS from "@utils/constants";
import * as S from "./styles";
import { CustomLoadingBlocker } from "@components/shared/custom-loading-blocker";

const Contact = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sendMessage = ({ name, msg }: { name: string; msg: string }): void => {
    setIsLoading(true);
    const sentMessage = `Witaj ${name}! Twoja wiadomość o treści: "${msg}", została pomyślnie wysłana, wkrótce się skontaktujemy. Dziękujemy!`;

    setTimeout(() => {
      setIsLoading(false);
      toast.success(sentMessage);
    }, 5000);
  };
  return (
    <Formik
      {...{
        initialValues: { name: "", msg: "", email: "", phone: "" },
        onSubmit: (values) => sendMessage(values),
        validationSchema: CONTACT_VALIDATION_SCHEMA,
        validateOnChange: true,
        enableReinitialize: true,
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isValid }) => (
        <S.ContactSection>
          <S.Title>
            {CONSTANTS.CONTACT} <RiMessage2Line style={{ color: "#ffff" }} />
          </S.Title>
          <CustomLoadingBlocker {...{ isBlocking: isLoading, isSending: true }}>
            <S.Container>
              <S.DescriptionContainer>
                {contactItems.map(({ title, content, icon }, idx: number) => (
                  <S.DescriptionGroup key={idx}>
                    {icon}
                    <div>
                      <S.DescriptionSubHeadling>
                        {title}
                      </S.DescriptionSubHeadling>
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
                      <FormFeedback
                        style={{
                          backgroundColor: "rgba(80,0,0,.3)",
                          padding: "4px",
                        }}
                      >
                        {errors[name]}
                      </FormFeedback>
                    </InputGroup>
                  )
                )}
                <Button
                  {...{
                    type: "button",
                    color: "warning",
                    onClick: () => handleSubmit(),
                    disabled: !isValid,
                    style: {
                      opacity: !isValid ? "0.4" : "1",
                      marginTop: "15px",
                    },
                  }}
                >
                  {CONSTANTS.SEND}
                </Button>
              </S.InputContainer>
            </S.Container>
          </CustomLoadingBlocker>
        </S.ContactSection>
      )}
    </Formik>
  );
};

export default Contact;
