import React, { useContext, useState } from "react";
import classes from "./NavButton.module.css";
import CartIcon from "../../assets/CartIcon";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

const NavButton = () => {
  const ctx = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  const closeModal = () => {
    setOpenCart(false);
  };

  let totalAmount = 0;
  ctx.items.forEach((meal) => {
    totalAmount += parseInt(meal.amount);
  });

  return (
    <>
      {openCart && <Cart onClose={closeModal} />}
      <button className={classes.button} onClick={() => setOpenCart(true)}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.title}>Your Cart</span>
        <span className={classes.badge}>{totalAmount}</span>
      </button>
    </>
  );
};

export default NavButton;
