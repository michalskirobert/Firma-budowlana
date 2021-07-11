import { ReactElement } from "react";

import { AiFillPhone, AiFillMail, AiFillPicture } from "react-icons/ai";
import { MdLocalOffer, MdHome, MdInfo, MdContactMail } from "react-icons/md";

import * as C from "@utils/constants";

export const navigationItems: readonly {
  name: string;
  link: string;
  icon: ReactElement | null;
}[] = [
  {
    name: C.HOMEPAGE,
    link: C.HOME_ROUTE,
    icon: <MdHome />,
  },
  {
    name: C.ABOUT,
    link: C.ABOUT_ROUTE,
    icon: <MdInfo />,
  },
  {
    name: C.OFFER,
    link: C.OFFER_ROUTE,
    icon: <MdLocalOffer />,
  },
  {
    name: C.GALLERY,
    link: C.GALLERY_ROUTE,
    icon: <AiFillPicture />,
  },
  {
    name: C.CONTANCT,
    link: C.CONTANCT_ROUTE,
    icon: <MdContactMail />,
  },
];

export const contactItems: readonly {
  name: string;
  value: string;
  icon: ReactElement;
}[] = Object.freeze([
  {
    name: C.PHONE,
    value: "+48 519 867 957",
    icon: <AiFillPhone />,
  },
  {
    name: C.EMAIL,
    value: "kontakt@buraczynscy.pl",
    icon: <AiFillMail />,
  },
]);
