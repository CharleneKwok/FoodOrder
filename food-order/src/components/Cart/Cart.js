import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import OrderedMeal from "./OrderedMeal";
import OrderForm from "./OrderForm";
import Card from "../UI/Card";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  console.log("🚀 ~ props", props);
  const ctx = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);

  const lastStepHandler = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm && (
        <Card>
          <div className={classes["ordered-meal"]}>
            {ctx.items.map((meal) => (
              <OrderedMeal meal={meal} key={`order-${meal.id}`} />
            ))}
          </div>
          <div className={classes["total-amount"]}>
            <h2>Total Amount</h2>
            <h2>${ctx.totalAmount.toFixed(2)}</h2>
          </div>
          <div className={classes["buttons"]}>
            <Button onClick={() => setShowForm(true)}>Order</Button>
            <Button onClick={props.onCloseButton} className={classes.close}>
              Close
            </Button>
          </div>
        </Card>
      )}
      {showForm && (
        <OrderForm onCancelBtn={props.onCloseButton} onLast={lastStepHandler} />
      )}
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
