import React from "react";
import NewItemForm from "./new-item";

function Page() {
  return (
    <div className="min-h-screen bg-black flex items-start justify-center pt-10">
      <div className="w-full max-w-md">
        <NewItemForm />
      </div>
    </div>
  );
}

export default Page;
