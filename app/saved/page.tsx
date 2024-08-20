"use client";

import { useEffect, useState } from "react";
import Card from "../ui/Card.tsx";
import Navbar from "../ui/Navbar.tsx";

const SavedPage = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("savedItems")!) || [];
    setSavedItems(items);
  }, []);

  return (
    <>
      <div className="p-8">
        <h1 className="mb-6 font-bold text-2xl text-center">
          Saved Characters
        </h1>
        {savedItems.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {savedItems.map((item) => (
              <Card key={item.url} data={item} />
            ))}
          </div>
        ) : (
          <p className="text-center">No saved characters yet.</p>
        )}
      </div>
    </>
  );
};

export default SavedPage;
