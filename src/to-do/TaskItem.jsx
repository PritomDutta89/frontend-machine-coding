import React from "react";

const TaskItem = ({ item, handleDelete, handleToggle }) => {
  return (
    <div
      className={`${
        item.complete ? "bg-amber-200" : "bg-gray-200"
      }  rounded-md overflow-auto flex flex-col gap-1.5 p-[1rem]`}
    >
      <p
        className={`font-bold text-[1.2rem] ${item.complete && "line-through"}`}
      >
        {item.title}
      </p>
      <p className={` ${item.complete && "line-through"}`}>
        {item.description}
      </p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleDelete(item.id)}
          className="bg-red-500 rounded-md p-2 text-[0.8rem] font-bold cursor-pointer w-fit"
        >
          Delete Task
        </button>

        <button
          onClick={() => handleToggle(item.id)}
          className="bg-blue-500 rounded-md p-2 text-[0.8rem] font-bold cursor-pointer w-fit"
        >
          Mark as done
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
