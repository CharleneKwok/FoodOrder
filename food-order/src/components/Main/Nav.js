import React from "react";
import classes from "./Nav.module.css";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <h1>ReactMeals</h1>
      <NavButton />
    </nav>
  );
};

export default Nav;
