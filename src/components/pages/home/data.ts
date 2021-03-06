import doors from "@assets/images/stock/cent.jpg";
import sink from "./../../../assets/images/gallery/20210613_141509_HDR.jpg";
import toilet from "./../../../assets/images/gallery/20210613_141302.jpg";

import * as CONSTANTS from "@utils/constants";

export const INFO: readonly {
  title: string;
  content: string;
  button: string | null;
  imgURL: string;
}[] = [
  {
    title: CONSTANTS.DOOR_INSTALLATION,
    content: `${CONSTANTS.DOOR_INSTALLATION_CONTENT.substr(0, 25)}...`,
    imgURL: doors,
    button: CONSTANTS.SEE_MORE,
  },
  {
    title: CONSTANTS.FITTINGS_INSTALLATION,
    content: `${CONSTANTS.FITTINGS_INSTALLATION_CONTENT.substr(0, 25)}...`,
    imgURL: sink,
    button: CONSTANTS.SEE_MORE,
  },
  {
    title: CONSTANTS.DRAIN_INSTALLATION,
    content: `${CONSTANTS.DRAIN_INSTALLATION_CONTENT.substr(0, 25)}...`,
    imgURL: toilet,
    button: CONSTANTS.SEE_MORE,
  },
];
