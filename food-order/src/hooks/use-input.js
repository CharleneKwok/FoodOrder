import React, { useState } from "react";

const useInput = (checkValid) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueInvalid = isTouched && !checkValid(value);

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setIsTouched(false);
    setValue("");
  };

  return {
    value,
    valueInvalid,
    onBlurHandler,
    onChangeHandler,
    reset,
  };
};

export default useInput;
