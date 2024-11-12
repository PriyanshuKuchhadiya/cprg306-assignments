"use client";

import { useState, useEffect, useRef } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const detailsRef = useRef(null); // Create a ref for the meal details section

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  const fetchMealDetails = async (id) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
      detailsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to meal details
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold text-orange-400 mb-4">
        Meal Ideas for "{ingredient}"
      </h2>
      {meals.length === 0 ? (
        <p className="text-gray-400">No meals found. Try selecting another ingredient.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              onClick={() => fetchMealDetails(meal.idMeal)}
              className="bg-gray-700 rounded-lg p-4 flex flex-col items-center transform transition hover:scale-105 cursor-pointer"
            >
              <p className="text-white text-center font-medium">{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}

      {/* Meal details section */}
      <div ref={detailsRef} className="mt-4 bg-gray-900 p-4 rounded-lg">
        {selectedMeal && (
          <>
            <h3 className="text-lg text-orange-400 font-semibold mb-2">
              {selectedMeal.strMeal}
            </h3>
            <h4 className="text-white font-semibold mb-1">Ingredients:</h4>
            <ul className="text-gray-300 list-disc list-inside">
              {Array.from({ length: 20 }).map((_, i) => {
                const ingredient = selectedMeal[`strIngredient${i + 1}`];
                const measure = selectedMeal[`strMeasure${i + 1}`];
                return (
                  ingredient && (
                    <li key={i}>
                      {measure} {ingredient}
                    </li>
                  )
                );
              })}
            </ul>
            <h4 className="text-white font-semibold mt-2">Instructions:</h4>
            <p className="text-gray-300 mt-1">{selectedMeal.strInstructions}</p>
          </>
        )}
      </div>
    </div>
  );
}
