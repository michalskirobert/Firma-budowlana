import React, { Suspense } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { useGalleryContainer } from "./container";

import { photos } from "./utils";

const GalleryPage = (): JSX.Element => {
  const { openLightbox, viewerIsOpen, closeLightbox, currentImage } =
    useGalleryContainer();
  return (
    <section>
      <h2>Galeria</h2>
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  source: x.src,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </section>
  );
};

export default GalleryPage;
