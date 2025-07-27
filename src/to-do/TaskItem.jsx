import React from "react";

const TaskItem = ({ item }) => {
  return (
    <div className="bg-gray-200 rounded-md overflow-auto flex flex-col gap-1.5 p-[1rem]">
      <p className="font-bold text-[1.2rem]">{item.title}</p>
      <p>{item.description}</p>
      <button className="bg-red-500 rounded-md p-2 text-[0.8rem] font-bold cursor-pointer w-fit">
        Delete Task
      </button>
    </div>
  );
};

export default TaskItem;
