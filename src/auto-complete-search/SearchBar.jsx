import { useEffect, useState } from "react";

const data = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];

const SearchBar = () => {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        const updatedData = data.filter((item) => {
          return item.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(updatedData);
      } else {
        setFilteredData([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prv) => Math.min(prv + 1, filteredData.length - 1));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prv) => Math.max(prv - 1, 0));
    } else if (
      e.key === "Enter" &&
      activeIndex >= 0 &&
      activeIndex < filteredData.length - 1
    ) {
      setText(filteredData[activeIndex]);
      setFilteredData([]);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[2rem] w-full">
      <input
        type="text"
        className="border outline-0 p-1 "
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search..."
      />

      {filteredData?.length > 0 && (
        <div className="bg-gray-100 w-[12rem] flex  mt-[1rem] flex-col items-center p-3 h-[7rem] overflow-auto">
          {filteredData.map((item, index) => (
            <div
              className={`p-1 cursor-pointer hover:bg-amber-200 w-full ${
                index === activeIndex ? "bg-amber-100" : ""
              }`}
              key={index}
              onClick={() => {
                setText(item);
                setFilteredData([]);
                setActiveIndex(-1);
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
