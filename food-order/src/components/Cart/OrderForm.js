import React from "react";
import ReactDOM from "react-dom";
import classes from "./OrderForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Form = (props) => {
  console.log(props);
  return (
    <Card className={classes.form}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <p>Please enter your name</p>
      <label htmlFor="street">Street</label>
      <input type="text" id="street" />
      <p>Please enter your street</p>

      <label htmlFor="city">City</label>
      <input type="text" id="city" />
      <p>Please enter your city</p>
      <label htmlFor="code">Postal Code</label>
      <input type="number" id="code" />
      <p>Please enter your postal code</p>
      <div>
        <Button onClick={props.onCancelBtn}>Cancel</Button>
        <Button onClick={props.onLast}>Last Step</Button>
        <Button>Confirm</Button>
      </div>
    </Card>
  );
};

const OrderForm = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Form onCancelBtn={props.onCancelBtn} onLast={props.onLast} />,
        document.getElementById("form-root")
      )}
    </>
  );
};

export default OrderForm;
