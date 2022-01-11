import React, { useState } from "react";
import Meal from "./components/Main/Meal";
import Nav from "./components/Main/Nav";
import MealList from "./components/Storage/MealList";

function App() {
  const [ordered, setOrdered] = useState([]);

  const addOrder = (order, num) => {
    setOrdered((prev) => {
      prev.forEach((meal, idx, arr) => {
        if (meal.id === order.id) {
          let sumPrice =
            parseFloat(order.totalPrice) + parseFloat(meal.price) * num;
          order.totalPrice = sumPrice;
          order.amount = meal.amount + num;
          arr.splice(idx, 1);
        }
      });
      let newList = [order, ...prev];
      newList = newList.filter((meal) => meal.amount >= 1);
      newList.sort((a, b) => {
        const A = [...a.id]
          .map((char) => char.charCodeAt(0))
          .reduce((prev, curr) => prev + curr);
        const B = [...b.id]
          .map((char) => char.charCodeAt(0))
          .reduce((prev, curr) => prev + curr);
        return A - B;
      });
      return newList;
    });
  };

  return (
    <MealList.Provider
      value={{ addOrderHandler: addOrder, orderedMeals: ordered }}
    >
      <Nav />
      <Meal />
    </MealList.Provider>
  );
}

export default App;
