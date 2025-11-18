import { useEffect } from "react";

const usePreloadImages = (imageList = []) => {
  useEffect(() => {
    imageList.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, [imageList]);
};

export default usePreloadImages;
