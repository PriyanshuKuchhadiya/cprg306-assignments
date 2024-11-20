"use client";

import { useState, useEffect } from "react";
import NewItemForm from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service"; // Firestore service
import { useUserAuth } from "../_utils/auth-context"; // Authentication context

export default function ShoppingListApp() {
  const { user, gitHubSignIn } = useUserAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      const fetchItems = async () => {
        setLoading(true);
        try {
          const userItems = await getItems(user.uid);
          setItems(userItems);
        } catch (error) {
          console.error("Failed to load items:", error);
          alert("Error loading shopping list.");
        } finally {
          setLoading(false);
        }
      };
      fetchItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        console.log("Adding item:", newItem); // Log for debugging
        const itemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
      } catch (error) {
        console.error("Failed to add item:", error.message);
        alert("Error adding item. Please check the form and try again.");
      }
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/,\s*\d+\s*[A-Za-z]*.*|[^\w\s]/g, "").trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <div>
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      </div>
    );
  }

  if (loading) {
    return <p>Loading your shopping list...</p>;
  }

  return (
    <div className="flex p-4 max-w-6xl mx-auto space-x-4">
      <div className="flex-1 bg-gray-800 rounded-lg p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Shopping List</h1>
        <NewItemForm onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="w-1/3 bg-gray-100 rounded-lg p-4 shadow-md">
        {selectedItemName ? (
          <MealIdeas ingredient={selectedItemName} />
        ) : (
          <p className="text-center text-gray-600">Select an item to see meal ideas!</p>
        )}
      </div>
    </div>
  );
}
