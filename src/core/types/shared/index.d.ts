export declare namespace NShared {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type N = null;

  export type TCustomComparingPictruesContainer = {
    beforeImageWidth: S;
    sliderLeft: S;
    container: React.RefObject<HTMLDivElement>;
  };

  export type TCustomLoadingBlockerProps = {
    children: React.ReactNode | React.ReactNode[];
    isBlocking: B;
    isSending?: B;
  };

  export type TCustomModalProps = {
    title: S;
    content: S;
    toggle: () => void;
    isOpen: B;
    buttonContent?: S;
    onAction?: any;
  };
}
