"use client";

import { useGallery } from "../hooks/useGallery";

import { useState, useEffect } from "react";

// import { mountainImages } from "../data/mountainImages";

const GalleryList = async () => {
  const images = [
    // "https://cdn.pixabay.com/photo/2023/05/30/17/41/succulent-8029288__340.jpg",
    // "https://cdn.pixabay.com/photo/2023/05/24/05/06/dog-8014047__340.jpg",
    // "https://cdn.pixabay.com/photo/2023/02/10/14/09/dandelion-7780950__340.jpg",
    "https://i.imgur.com/HcNebgp.png"
  ];

  const ImageScroll = ({ images }) => {
    return (
      <div className="flex overflow-x-auto">
        {images.map((image, idx) => (
          <img
            src={image}
            key={idx}
            alt={`Image ${idx}`}
            className="w-64 h-auto flex-shrink-0 mr-4"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="">
      <h1>Image scroll example</h1>
      <ImageScroll images={images} />
    </div>
  );

  // const [page, setPage] = useState(1)

  // const {
  //   imageList: mountainImages,
  //   isLoading,
  //   error,
  // } = await useGallery("/galleryImages/mountains");
  // // console.log(mountainImages);

  // return (
  //   <div className="min-h-screen flex flex-col items-center  ">
  //     <div className="columns-3 gap-3">
  //       {mountainImages.map((image, idx) => (
  //         <img src={image.url} alt="yoyo" key={idx} className="w-full pb-3" loading="lazy" />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default GalleryList;
