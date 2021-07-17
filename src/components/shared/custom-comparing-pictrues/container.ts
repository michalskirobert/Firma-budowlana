import { useEffect, useRef, useState } from "react";

import { NShared } from "@namespace/shared";

export const useCustomComparingPictruesContainer =
  (): NShared.TCustomComparingPictruesContainer => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [beforeImageWidth, setBeforeImageWidth] = useState<string>("15vw");
    const [sliderLeft, setSliderLeft] = useState<string>("");
    const container = useRef<HTMLDivElement>(null);

    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const dragArrow = (e: MouseEvent): void => {
      let xPos: number = e.offsetX;
      let size = container.current?.offsetWidth;

      setBeforeImageWidth(`${xPos}px`);
      setSliderLeft(`${xPos}px`);

      if (xPos < 50) {
        setBeforeImageWidth("0px");
        setSliderLeft("0px");
      }

      if (xPos + 50 > Number(size)) {
        setBeforeImageWidth(`${size}px`);
        setSliderLeft(`${size}px`);
      }
    };

    const onTouchDragArrow = (e: any): void => {
      let xPos: number = e.targetTouches[0]?.clientX;
      let size = container.current?.offsetWidth;

      setBeforeImageWidth(`${xPos}px`);
      setSliderLeft(`${xPos}px`);

      if (xPos < 50) {
        setBeforeImageWidth("0px");
        setSliderLeft("0px");
      }

      if (xPos + 50 > Number(size)) {
        setBeforeImageWidth(`${size}px`);
        setSliderLeft(`${size}px`);
      }
    };

    useEffect(() => {
      if (width < 1200) {
        return;
      }

      container.current?.addEventListener("mousemove", dragArrow);

      return () =>
        container.current?.removeEventListener("mousemove", dragArrow);
    });

    useEffect(() => {
      if (width > 1200) {
        return;
      }

      container.current?.addEventListener("touchmove", onTouchDragArrow);

      return () =>
        container.current?.removeEventListener("touchmove", onTouchDragArrow);
    });

    useEffect(() => {
      if (width > 1200) {
        return;
      }

      setBeforeImageWidth("50%");
    }, []);

    return { beforeImageWidth, sliderLeft, container };
  };
