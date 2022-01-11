import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div></div>
      <div className={classes["total-amount"]}>
        <h2>Total Amount</h2>
        <h2>$0</h2>
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
