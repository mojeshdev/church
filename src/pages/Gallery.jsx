import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center mt-28 ">
      <h1 className="text-4xl font-bold text-white mb-10 font-heading">
        Church Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Link
          to="https://photos.google.com/u/1/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white text-center px-16 py-7 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
        >
          Christmas Photos
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
