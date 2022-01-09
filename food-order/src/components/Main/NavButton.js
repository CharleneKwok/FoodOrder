import React from "react";
import classes from "./NavButton.module.css";
import CartIcon from "../Cart/CartIcon";

const NavButton = () => {
  return (
    <button>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default NavButton;
