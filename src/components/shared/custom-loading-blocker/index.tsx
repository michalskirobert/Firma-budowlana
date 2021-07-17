import { NShared } from "@namespace/shared";
import React, { ReactElement } from "react";

import BlockUi from "react-block-ui";
import { SendingLoader } from "./sending-loader";
import * as S from "./styles";

export const CustomLoadingBlocker = ({
  children,
  isBlocking,
  isSending,
}: NShared.TCustomLoadingBlockerProps): ReactElement => (
  <BlockUi
    {...{
      tag: "div",
      blocking: isBlocking,
      loader: isSending ? (
        <SendingLoader />
      ) : (
        <S.CustomLoader
          {...{ type: "ball-pulse-sync", active: true, color: "#ffc500" }}
        />
      ),
    }}
  >
    {children}
  </BlockUi>
);
