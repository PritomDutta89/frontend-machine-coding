import React, { useState } from "react";

const TaskItem = ({ item, handleDelete, handleToggle, handleUpdate }) => {
  const [updateTask, setUpdateTask] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: item.title,
    description: item.description,
  });

  const setData = (e) => {
    setUpdatedTask((prv) => ({
      ...prv,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className={`${
        item.complete ? "bg-amber-200" : "bg-gray-200"
      }  rounded-md overflow-auto flex flex-col gap-1.5 p-[1rem]`}
    >
      {updateTask ? (
        <>
          <input
            type="text"
            alt="title"
            className="border outline-0 border-gray-500 rounded-md p-1 px-2"
            placeholder="Enter title"
            name="title"
            onChange={setData}
            value={updatedTask.title}
          />
          <input
            type="text"
            alt="title"
            className="border outline-0 border-gray-500 rounded-md p-1 px-2"
            placeholder="Enter description"
            name="description"
            onChange={setData}
            value={updatedTask.description}
          />
        </>
      ) : (
        <>
          <p
            className={`font-bold text-[1.2rem] ${
              item.complete && "line-through"
            }`}
          >
            {item.title}
          </p>
          <p className={` ${item.complete && "line-through"}`}>
            {item.description}
          </p>
        </>
      )}
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleDelete(item.id)}
          className="bg-red-500 rounded-md p-2 text-[0.8rem] font-bold cursor-pointer w-fit"
        >
          Delete Task
        </button>

        <button
          onClick={() => {
            setUpdateTask((prv) => !prv);
            handleUpdate(item.id, updatedTask);
          }}
          className="bg-blue-950 text-white rounded-md p-2 text-[0.8rem] font-bold cursor-pointer w-fit"
        >
          Update Task
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
