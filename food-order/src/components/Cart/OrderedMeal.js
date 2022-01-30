import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./OrderedMeal.module.css";

const OrderedMeal = (props) => {
  const ctx = useContext(CartContext);

  const addMeal = () => {
    const meal = { ...props.meal, amount: 1, totalPrice: props.meal.price };

    ctx.addItem(meal);
  };

  const minusMeal = () => {
    ctx.removeItem(props.meal.id);
  };

  const mealIndex = ctx.items.findIndex((item) => item.id === props.meal.id);
  const totalAmount = ctx.items[mealIndex].amount;

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>{props.meal.name}</h3>
        <span className={classes.price}>${props.meal.price}</span>
        <div className={classes.amount}>x{totalAmount}</div>
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
