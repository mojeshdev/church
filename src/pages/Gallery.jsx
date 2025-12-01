import React, { useState } from "react";
import { galleryImages } from "../Data/imagesData.js";
import { CircleArrowLeft, CircleArrowRight, Download, X } from "lucide-react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPopup = (index) => {
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const downloadImage = () => {
    const img = galleryImages[currentIndex];
    const link = document.createElement("a");
    link.href = `/Images/pictures/${img}`;
    link.download = img;
    link.click();
  };

  return (
    <div className="min-h-screen  flex flex-col items-center m-24">
      <h1 className="text-4xl font-bold text-white mb-10 font-heading">
        Church Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={`/Images/pictures/${img}`}
            loading="lazy"
            alt="gallery"
            className="w-full h-64 object-cover rounded-xl  hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openPopup(index)}
          />
        ))}
      </div>

      {/* POPUP VIEWER */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">

          {/* Close button */}
          <button
            onClick={closePopup}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={36} />
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <CircleArrowLeft size={50} />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <CircleArrowRight size={50} />
          </button>

          {/* Download icon */}
          <button
            onClick={downloadImage}
            className="absolute top-[600px] left-[1170px] text-white hover:scale-110 transition"
          >
            <Download size={34} />
          </button>

          {/* Full image */}
          <img
            src={`/Images/pictures/${galleryImages[currentIndex]}`}
            alt="Full view"
            className="max-w-4xl max-h-[80vh] rounded-lg transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
