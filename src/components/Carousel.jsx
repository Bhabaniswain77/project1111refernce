import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full">
        <div className="flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt="Product"
            className="w-full h-64 object-cover cursor-pointer"
            onClick={openFullScreen}
          />
        </div>
        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
        >
          {"<"}
        </button>
        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
        >
          {">"}
        </button>
      </div>

      {/* Full-Screen Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt="Product Full Screen"
            className="w-full h-auto max-h-screen object-contain"
          />
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white bg-gray-800 p-3 rounded-full"
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
