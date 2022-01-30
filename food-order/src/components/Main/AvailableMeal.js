import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeal.module.css";

const AvailableMeal = () => {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const getData = async (second) => {
      const resp = await fetch(
        "https://react-meal-b0713-default-rtdb.firebaseio.com/meals.json",
        {
          method: "GET",
        }
      );
      const data = await resp.json();
      setMeal(Object.values(data));
    };
    getData();
  }, []);

  return (
    <div className={classes.container}>
      {meal?.map((meal) => (
        <MealItem meal={meal} key={`${meal.id}-item`} />
      ))}
    </div>
  );
};

export default AvailableMeal;
