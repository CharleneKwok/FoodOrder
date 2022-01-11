import React, { useContext, useState } from "react";
import MealList from "../Storage/MealList";
import Button from "../UI/Button";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const [mealAmount, setMealAmount] = useState(1);
  const ctx = useContext(MealList);
  const meal = props.meal;

  const addMeal = (e) => {
    e.preventDefault();
    const newMeal = {
      ...meal,
      amount: mealAmount,
      price: meal.price * mealAmount,
    };
    ctx.addOrderHandler(newMeal);
  };

  return (
    <div className={classes.container}>
      <div className={classes["meal-title"]}>
        <h3>{meal.name}</h3>
        <p className={classes.description}>{meal.description}</p>
        <p className={classes.price}>${meal.price.toFixed(2)}</p>
      </div>
      <form className={classes["add-cart"]} onSubmit={addMeal}>
        <div className={classes.amount}>
          <label htmlFor={`${meal.id}-input`}>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            id={`${meal.id}-input`}
            value={mealAmount}
            onChange={(e) => setMealAmount(e.target.value)}
          />
        </div>
        <Button className={classes.button} type="submit">
          + Add
        </Button>
      </form>
    </div>
  );
};

export default MealItem;
