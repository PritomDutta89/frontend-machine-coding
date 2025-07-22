import React, { useState } from "react";
import PopUp from "./PopUp";

const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {isOpen && <PopUp isClosed={() => setOpen(false)} />}
        <button
          className="cursor-pointer w-fit bg-blue-400 text-white p-2 font-bold rounded-md"
          onClick={() => setOpen(true)}
        >
          Click Here
        </button>
      </div>
    </>
  );
};

export default Modal;
