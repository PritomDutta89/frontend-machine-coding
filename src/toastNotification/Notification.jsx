import React, { useEffect } from "react";

const Notification = ({ onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 2000);
  }, []);

  return (
    <div className="fixed top-[1rem] bg-amber-500 p-[1rem] rounded-md">
      Hi, how are you?
    </div>
  );
};

export default Notification;
