import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import Button from "../UI/Button";
import MealList from "../Storage/MealList";
import OrderedMeal from "./OrderedMeal";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  const ctx = useContext(MealList);
  let totalPrice = 0;
  ctx.orderedMeals.forEach((meal) => {
    totalPrice += parseFloat(meal.totalPrice);
  });

  return (
    <div className={classes.modal}>
      <div className={classes["ordered-meal"]}>
        {ctx.orderedMeals?.map((meal) => (
          <OrderedMeal meal={meal} key={`order-${meal.id}`} />
        ))}
      </div>
      <div className={classes["total-amount"]}>
        <h2>Total Amount</h2>
        <h2>${parseFloat(totalPrice).toFixed(2)}</h2>
      </div>
      <div className={classes["buttons"]}>
        <Button>Order</Button>
        <Button onClick={props.onCloseButton} className={classes.close}>
          Close
        </Button>
      </div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal onCloseButton={props.onClose} />,
        document.getElementById("cart-modal-root")
      )}
    </>
  );
};

export default Cart;
