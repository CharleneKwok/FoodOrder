import React, { useContext } from "react";
import MealList from "../Storage/MealList";
import Button from "../UI/Button";
import classes from "./OrderedMeal.module.css";

const OrderedMeal = (props) => {
  const ctx = useContext(MealList);

  const addMeal = () => {
    ctx.addOrderHandler(props.meal, 1);
  };

  const minusMeal = () => {
    ctx.addOrderHandler(props.meal, -1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>{props.meal.name}</h3>
        <span className={classes.price}>${props.meal.price}</span>
        <div className={classes.amount}>x{props.meal.amount}</div>
      </div>
      <div className={classes.buttons}>
        <Button className={classes.button} onClick={minusMeal}>
          -
        </Button>
        <Button className={classes.button} onClick={addMeal}>
          +
        </Button>
      </div>
    </div>
  );
};

export default OrderedMeal;
