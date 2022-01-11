import React, { useState } from "react";
import Meal from "./components/Main/Meal";
import Nav from "./components/Main/Nav";
import MealList from "./components/Storage/MealList";

function App() {
  // localStorage.removeItem("orderedMeal");
  const meal = [];
  if (localStorage.getItem("orderedMeal")) {
    const meal = localStorage.getItem("orderedMeal");
  }
  const [ordered, setOrdered] = useState(meal);

  const addOrder = (order) => {
    setOrdered((prev) => {
      let hasMeal = false;
      prev.forEach((meal, idx, arr) => {
        if (meal.id === order.id) {
          arr.splice(idx, 1);
          hasMeal = true;
        }
      });
      const newList = [...prev, order];
      console.log(newList);
      localStorage.setItem("orderedMeal", newList);
      return newList;
    });
  };

  return (
    <MealList.Provider value={{ addOrderHandler: addOrder }}>
      <Nav />
      <Meal />
    </MealList.Provider>
  );
}

export default App;
