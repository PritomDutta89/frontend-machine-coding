import React, { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPage = Math.ceil(data.length / itemsPerPage);

  const updatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <p className="text-center mt-[0.6rem] font-bold">Pagination</p>

      <div className="grid grid-cols-4 mt-[2rem] gap-[1rem] p-3">
        {updatedData?.map((item, index) => (
          <div key={index} className=" bg-amber-200 p-3">
            {item}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[2rem] gap-[1rem]">
        <button
          className={`bg-blue-300 font-bold p-2 rounded-md w-[5rem]  ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            setCurrentPage((prv) => {
              return prv - 1;
            });
          }}
          disabled={currentPage === 1}
        >
          Prv
        </button>
        <p className="font-bold">{currentPage}</p>
        <button
          className={`bg-blue-300 font-bold p-2 rounded-md w-[5rem] ${
            currentPage === totalPage ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            setCurrentPage((prv) => prv + 1);
          }}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
