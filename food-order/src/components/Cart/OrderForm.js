import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./OrderForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import useInput from "../../hooks/use-input";
import tick from "../../assets/checked.png";

const Form = (props) => {
  const [success, setSuccess] = useState(false);
  const checkEmpty = (value) => {
    return value !== "";
  };

  const checkEmailValid = (email) => {
    return email.includes("@");
  };

  const {
    value: name,
    valueInvalid: nameInvalid,
    onBlurHandler: nameBlur,
    onChangeHandler: nameChange,
    reset: nameReset,
  } = useInput(checkEmpty);

  const {
    value: email,
    valueInvalid: emailInvalid,
    onBlurHandler: emailBlur,
    onChangeHandler: emailChange,
    reset: emailReset,
  } = useInput(checkEmailValid);

  const {
    value: street,
    valueInvalid: streetInvalid,
    onBlurHandler: streetBlur,
    onChangeHandler: streetChange,
    reset: streetReset,
  } = useInput(checkEmpty);

  const {
    value: city,
    valueInvalid: cityInvalid,
    onBlurHandler: cityBlur,
    onChangeHandler: cityChange,
    reset: cityReset,
  } = useInput(checkEmpty);

  const {
    value: code,
    valueInvalid: codeInvalid,
    onBlurHandler: codeBlur,
    onChangeHandler: codeChange,
    reset: codeReset,
  } = useInput(checkEmpty);

  let formValid = false;
  if (
    !nameInvalid &&
    !emailInvalid &&
    !streetInvalid &&
    !cityInvalid &&
    !codeInvalid &&
    name !== "" &&
    email !== ""
  ) {
    formValid = true;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const orderInfo = {
      name: name,
      email: email,
      address: street + " " + city + " " + code,
    };
    try {
      const resp = await fetch(
        "https://react-meal-b0713-default-rtdb.firebaseio.com/order.json",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderInfo),
        }
      );
      if (!resp.ok) {
        throw new Error("Sent data failed");
      }
    } catch (msg) {
      console.log(msg || "failed");
    }
    nameReset();
    emailReset();
    streetReset();
    codeReset();
    cityReset();
    setSuccess(true);
    console.log("Success");
  };

  return (
    <div>
      {!success ? (
        <form onSubmit={submitHandler}>
          <Card className={classes.form}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onBlur={nameBlur}
              onChange={nameChange}
            />
            {nameInvalid && <p>Please enter your name</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onBlur={emailBlur}
              onChange={emailChange}
            />
            {emailInvalid && <p>Please enter valid email</p>}
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onBlur={streetBlur}
              onChange={streetChange}
            />
            {streetInvalid && <p>Please enter your street</p>}
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onBlur={cityBlur}
              onChange={cityChange}
            />
            {cityInvalid && <p>Please enter your city</p>}
            <label htmlFor="code">Postal Code</label>
            <input
              type="number"
              id="code"
              value={code}
              onBlur={codeBlur}
              onChange={codeChange}
            />
            {codeInvalid && <p>Please enter your postal code</p>}
            <div>
              <Button onClick={props.onCancelBtn}>Cancel</Button>
              <Button onClick={props.onLast}>Last Step</Button>
              <Button type="submit" disabled={!formValid}>
                Confirm
              </Button>
            </div>
          </Card>
        </form>
      ) : (
        <Card className={classes.success}>
          <img src={tick} alt="tick" width="10%" height="10%" />
          <p>Thanks for your ordering!</p>
        </Card>
      )}
    </div>
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
