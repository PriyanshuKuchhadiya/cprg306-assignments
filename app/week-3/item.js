import React from "react";

function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 text-white p-4 mb-2 rounded-lg flex flex-col space-y-2">
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-sm">Buy {quantity} in {category}</div>
    </li>
  );
}

export default Item;