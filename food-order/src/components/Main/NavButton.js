import React, { useState } from "react";
import classes from "./NavButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";

const NavButton = () => {
  const [openCart, setOpenCart] = useState(false);

  const closeModal = () => {
    setOpenCart(false);
  };

  return (
    <>
      {openCart && <Cart onClose={closeModal} />}
      <button className={classes.button} onClick={() => setOpenCart(true)}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.title}>Your Cart</span>
        <span className={classes.badge}>1</span>
      </button>
    </>
  );
};

export default NavButton;
