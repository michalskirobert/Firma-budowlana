export declare namespace Home {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type N = null;
  export type homepageContainer = {
    fetchData: (name: S) => void;
    getUserInfo: (name: S, surname: S | U) => JSX.Element;
  };
}
