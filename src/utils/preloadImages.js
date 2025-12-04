export const preloadImages = (imageList = []) => {
  return Promise.all(
    imageList.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    })
  );
};
