import clsx from "clsx";
import React, { useState, useEffect } from "react";

const Card = ({ data }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    setIsSaved(savedItems.some((savedItem) => savedItem.url === data.url));
  }, [data]);

  const handleSave = () => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

    if (isSaved) {
      // Remove from saved items
      savedItems = savedItems.filter((savedItem) => savedItem.url !== data.url);
    } else {
      // Add to saved items
      savedItems.push(data);
    }

    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    setIsSaved(!isSaved);
  };

  return (
    <div className="group flex justify-center flex-col cursor-pointer rounded-lg border border-transparent px-5 py-4 hover:bg-cyan-600 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 hover:dark:bg-cyan-950">
      <h2 className="text-xl pb-2 font-bold dark:text-cyan-600 text-center">
        {data.name}
      </h2>
      <div>
        <p>Height: {data.height}</p>
        <p>Mass: {data.mass}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Skin Color: {data.skin_color}</p>
        <p>Eye Color: {data.eye_color}</p>
      </div>
      <button
        onClick={handleSave}
        className={clsx(
          `mt-4 px-4 py-2 rounded flex justify-center
          ${isSaved ? "bg-red-500 text-white" : " bg-blue-500 text-white"}`
        )}
      >
        {isSaved ? "Remove" : "Save"}
      </button>
    </div>
  );
};

export default Card;
