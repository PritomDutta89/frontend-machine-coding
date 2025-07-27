import React, { useState } from "react";
import TaskItem from "./TaskItem";

const ToDoApp = () => {
  const [toDo, setToDo] = useState({
    id: 0,
    title: "",
    description: "",
    complete: false,
    date: Date.now,
  });
  const [tasks, setTasks] = useState([]);

  const setData = (e) => {
    setToDo((prv) => ({
      ...prv,
      id: tasks.length + 1,
      [e.target.name]: e.target.value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    setTasks((prv) => [...prv, toDo]);
    setToDo({
      title: "",
      description: "",
      complete: false,
      date: Date.now,
    });
  };

  const handleDelete = (id) => {
    const filteredData = tasks.filter((item) => item.id !== id);
    setTasks(filteredData);
  };

  const handleKey = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      addData();
    }
  };

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center gap-[0.7rem]"
        onSubmit={addData}
      >
        <h1 className="font-bold text-[1.5rem]">To Do App</h1>
        <input
          type="text"
          alt="title"
          className="border outline-0 border-gray-500 rounded-md p-1 px-2"
          placeholder="Enter title"
          name="title"
          onChange={setData}
          value={toDo.title}
          required
        />
        <input
          type="text"
          alt="title"
          className="border outline-0 border-gray-500 rounded-md p-1 px-2"
          placeholder="Enter description"
          name="description"
          onChange={setData}
          value={toDo.description}
          required
        />
        <button
          className="bg-blue-300 rounded-md p-2 font-bold cursor-pointer"
          onKeyDown={handleKey}
        >
          Add Task
        </button>
      </form>

      <hr className="mt-[1rem] text-gray-200" />

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[0.8rem] px-4 mt-[1rem]">
        {tasks.map((item, index) => (
          <TaskItem
            key={index}
            item={item}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoApp;
