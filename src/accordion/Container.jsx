import React, { useState } from "react";

const Container = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-[1rem]">
      <button className="bg-blue-300 w-[15rem] rounded-md cursor-pointer" onClick={() => setOpen(!isOpen)}>{title}</button>
      {isOpen && <div className="bg-amber-100 w-[15rem] rounded-md text-center">{children}</div>}
    </div>
  );
};

export default Container;
