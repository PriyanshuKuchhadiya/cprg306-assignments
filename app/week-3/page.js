import React from "react";
import ItemList from "./item-list";

function Page() {
  return (
    <main className="bg-gray-900 min-h-screen flex justify-center items-start p-8">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}

export default Page;