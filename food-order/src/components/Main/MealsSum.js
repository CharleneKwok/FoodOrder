import React from "react";
import classes from "./MealsSum.module.css";

const MealsSum = () => {
  return (
    <div className={classes.container}>
      <div className={classes.background} />
      <section className={classes.sum}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </div>
  );
};

export default MealsSum;