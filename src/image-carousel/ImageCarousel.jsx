import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1018/800/400",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prvItem = () => {
    setCurrent((prv) => (prv - 1 + length) % length);
  };

  const nextItem = () => {
    setCurrent((prv) => (prv + 1) % length);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1 h-screen ">
      <div className="flex justify-center items-center ">
        <button className="cursor-pointer" onClick={prvItem}>
          ◀
        </button>

        <img src={images[current]} alt="" className="rounded-md" />

        <button className="cursor-pointer" onClick={nextItem}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
