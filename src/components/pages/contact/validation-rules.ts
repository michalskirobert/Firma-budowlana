import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const CONTACT_VALIDATION_SCHEMA = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "Numer telefonu jest nie prawidłowy")
    .required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Adres email jest wymagany"),
  msg: yup.string().required("Wiadomość jest wymagana"),
  name: yup
    .string()
    .required("Podanie imienia jest wymagane")
    .typeError("Nieprawidłowe imię"),
});
