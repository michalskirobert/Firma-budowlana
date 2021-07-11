import React from "react";

import * as S from "./styles";

export const SendingLoader = () => {
  return (
    <div>
      <S.SendingInfo>Wysyłanie wiadomości</S.SendingInfo>
      <S.CustomLoader
        {...{ type: "ball-pulse-sync", active: true, color: "#ffc500" }}
      />
    </div>
  );
};
