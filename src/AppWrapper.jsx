// AppWrapper.jsx
import React, { useEffect, useState } from 'react';
import Preloader from './Shared/Preloader/Preloader';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

const AppWrapper = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    let loadedCount = 0;

    if (images.length === 0) {
      setIsPageLoaded(true);
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === images.length) setIsPageLoaded(true);
      } else {
        img.onload = img.onerror = () => {
          loadedCount++;
          if (loadedCount === images.length) setIsPageLoaded(true);
        };
      }
    });
  }, []);

  return (
    <>
      {!isPageLoaded && <Preloader />}
      {isPageLoaded && <RouterProvider router={router} />}
    </>
  );
};

export default AppWrapper;
