import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Fetch all items for a specific user
export async function getItems(userId) {
  const items = [];
  try {
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    throw new Error("Failed to fetch items.");
  }
  return items;
}

// Add a new item to the user's shopping list
export async function addItem(userId, item) {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw new Error("Failed to add item.");
  }
}