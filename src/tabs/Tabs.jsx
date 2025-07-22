import React, { useState } from "react";

const tabData = [
  {
    title: "Tab 1",
    content: "This is tab 1",
  },
  {
    title: "Tab 2",
    content: "This is tab 2",
  },
  {
    title: "Tab 3",
    content: "This is tab 3",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center mt-[2rem] gap-[1rem]">
        {tabData?.map((item, index) => (
          <button
            key={index}
            className="cursor-pointer w-fit bg-blue-400 text-white p-2 font-bold rounded-md"
            onClick={() => setActiveTab(index)}
          >
            {item?.title}
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[1rem] bg-amber-200 ">{tabData[activeTab]?.content}</div>
    </>
  );
};

export default Tabs;
