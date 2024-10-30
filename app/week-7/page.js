"use client";

import { useState } from "react";
import NewItemForm from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function ShoppingListApp() {
  // Initialize state with items from items.json
  const [items, setItems] = useState(itemsData);

  // Handler to add a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="p-4 max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
      <NewItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
