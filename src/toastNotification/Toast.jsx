import React, { useState } from "react";
import Notification from "./Notification";

const Toast = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col mt-[10rem]">
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer w-fit bg-blue-400 text-white p-2 font-bold rounded-md"
      >
        Click Here
      </button>

      {isOpen && <Notification onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Toast;
