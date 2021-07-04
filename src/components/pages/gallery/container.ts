import React, { useCallback, useState } from "react";

import { NGallery } from "@namespace/index";

export const useGalleryContainer = (): NGallery.TGalleryContainer => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return { currentImage, closeLightbox, openLightbox, viewerIsOpen };
};
