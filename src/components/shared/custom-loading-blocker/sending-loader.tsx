import React, { ReactElement } from "react";

import * as S from "./styles";

export const SendingLoader = (): ReactElement => {
  return (
    <div>
      <S.SendingInfo>Wysyłanie wiadomości</S.SendingInfo>
      <S.CustomLoader
        {...{ type: "ball-pulse-sync", active: true, color: "#ffc500" }}
      />
    </div>
  );
};
