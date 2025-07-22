import React from "react";

const PopUp = ({ isClosed }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-50">
      <div className=" bg-gray-200 w-[15rem] p-[0.6rem]">
        <div className="flex justify-between items-center">
          <p>Contact</p>
          <p className="cursor-pointer" onClick={isClosed}>
            x
          </p>
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta
          blanditiis ipsa aperiam perspiciatis est iure praesentium excepturi
          sapiente beatae ipsum doloremque minus veniam quasi ipsam, laborum
          esse autem. Tempore.
        </p>
      </div>
    </div>
  );
};

export default PopUp;
