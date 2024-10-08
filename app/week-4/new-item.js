"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-start h-screen bg-black">
      <div className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-md mt-4">
        {/* Setting the number text color to black */}
        <span className="text-lg font-medium text-black">{quantity}</span>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-6 h-6 flex items-center justify-center rounded-full text-white ${
            quantity === 1 ? "bg-gray-400" : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`w-6 h-6 flex items-center justify-center rounded-full text-white ${
            quantity === 20 ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
