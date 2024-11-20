"use client";

import { useState } from "react";

function NewItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity: parseInt(quantity, 10), // Ensure quantity is an integer
      category: category.toLowerCase(), // Convert category to lowercase
    };

    onAddItem(newItem); // Pass valid item to the parent handler
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
          maxLength={50} // Enforce max length for Firestore rules
          className="w-full p-2 rounded-md border border-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center bg-white rounded-md p-2">
          <button
            type="button"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="bg-gray-500 text-white p-2 rounded-l-md focus:outline-none"
          >
            -
          </button>
          <span className="mx-2 text-lg text-black">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="bg-blue-500 text-white p-2 rounded-r-md focus:outline-none"
          >
            +
          </button>
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-500 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}

export default NewItemForm;
