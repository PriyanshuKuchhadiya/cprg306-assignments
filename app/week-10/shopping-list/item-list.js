"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md">
      <div className="mb-4">
        <span className="mr-2 font-semibold">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg mr-2 
                      ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"} 
                      hover:bg-orange-600`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg 
                      ${sortBy === "category" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"} 
                      hover:bg-orange-600`}
        >
          Category
        </button>
      </div>

      <ul className="list-none p-0">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}  
          />
        ))}
      </ul>
    </div>
  );
}
