import React, { useContext, useState } from "react";
import classes from "./NavButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";
import MealList from "../Storage/MealList";

const NavButton = () => {
  const ctx = useContext(MealList);
  const [openCart, setOpenCart] = useState(false);

  const closeModal = () => {
    setOpenCart(false);
  };

  let totalAmount = 0;
  ctx.orderedMeals.forEach((meal) => {
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
