import { ReactElement } from "react";
import {
  AiOutlineMail,
  GrMapLocation,
  AiFillPhone,
  MdPerson,
} from "react-icons/all";
import { InputType } from "reactstrap/es/Input";

const styledIcons = {
  backgroundColor: "#ffff",
  fontSize: "3rem",
  borderRadius: "100%",
  padding: "10px",
  marginRight: "15px",
};

const contactIconsSize = { height: "35px" };

export const contactItems: readonly {
  title: string;
  content: string;
  icon: ReactElement;
}[] = Object.freeze([
  {
    title: "Telefon",
    content: "+48 519 867 957",
    icon: <AiFillPhone {...{ style: styledIcons }} />,
  },
  {
    title: "E-mail",
    content: "contact@buraczynscy.pl",
    icon: <AiOutlineMail {...{ style: styledIcons }} />,
  },
  {
    title: "Adres",
    content: "Warszawa i okolice",
    icon: <GrMapLocation {...{ style: styledIcons }} />,
  },
]);

export const contactInputsHelper: readonly {
  type: InputType | undefined;
  placeholder: string;
  icon?: ReactElement;
  name: string;
}[] = Object.freeze([
  {
    name: "name",
    type: "text",
    placeholder: "Np. Jan Kowalski",
    icon: <MdPerson {...{ style: contactIconsSize }} />,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Np. jan.kowalski@gmail.com",
    icon: <AiOutlineMail {...{ style: contactIconsSize }} />,
  },
  {
    name: "msg",
    type: "textarea",
    placeholder: "Twoja wiadomość...",
  },
]);
