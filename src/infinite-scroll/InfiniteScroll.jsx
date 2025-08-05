import React, { useEffect, useState } from "react";

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Post title ${i + 1}`,
}));

const InfiniteScroll = () => {
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerLoad = 10;

  const loadData = () => {
    const showData = data.slice(
      visibleData.length,
      visibleData.length + itemsPerLoad
    );
    if (showData.length === 0) {
      setHasMore(false);
      return;
    }
    setVisibleData((prv) => [...prv, ...showData]);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      console.log("check: ", scrollTop, clientHeight, scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
        loadData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleData, hasMore]);

  return (
    <div>
      <h1 className="text-center bg-amber-100 mb-[2rem] sticky top-0 p-2 font-bold">
        News Feed
      </h1>
      <div className="flex items-center justify-center flex-col gap-[1rem]">
        {visibleData?.map((item, index) => (
          <div key={index} className="bg-amber-300 p-3 flex flex-col">
            <p>Id: {item?.id}</p>
            <p>title: {item?.title}</p>
          </div>
        ))}
      </div>

      {!hasMore && <div>No data available</div>}
    </div>
  );
};

export default InfiniteScroll;
