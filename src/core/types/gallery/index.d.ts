export declare namespace NGallery {
  type S = string;
  type N = number;
  type B = boolean;
  type U = undefined;
  type N = null;

  export type TGalleryContainer = {
    currentImage: N;
    viewerIsOpen: B;
    openLightbox: (event: any, { photo, index }: any) => void;
    closeLightbox: () => void;
  };
}
