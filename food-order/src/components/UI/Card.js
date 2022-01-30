import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const allClass = `${props.className} ${classes.card}`;
  return <div className={allClass}>{props.children}</div>;
};

export default Card;
