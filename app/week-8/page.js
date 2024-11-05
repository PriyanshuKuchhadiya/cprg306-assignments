"use client";

import { useState } from "react";
import NewItemForm from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";  
import itemsData from "./items.json";

export default function ShoppingListApp() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/,\s*\d+\s*[A-Za-z]*.*|[^\w\s]/g, "").trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex p-4 max-w-6xl mx-auto space-x-4">
      <div className="flex-1 bg-gray-800 rounded-lg p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Shopping List</h1>
        <NewItemForm onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="w-1/3 bg-gray-100 rounded-lg p-4 shadow-md"> {/* Adjusted width for smaller meal ideas section */}
        {selectedItemName ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <p className="text-center text-gray-600">Select an item to see meal ideas!</p>
        )}
      </div>
    </div>
  );
}
