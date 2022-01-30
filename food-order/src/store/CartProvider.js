import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartFn = (prevState, action) => {
  if (action.type === "add") {
    const itemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );

    const itemAlreadyExist = prevState.items[itemIndex];
    let newItems;
    let total;

    // if already on the list
    if (itemAlreadyExist) {
      const newItem = {
        ...itemAlreadyExist,
        amount: itemAlreadyExist.amount + action.item.amount,
        totalPrice: itemAlreadyExist.totalPrice + action.item.totalPrice,
      };
      total = prevState.totalAmount + action.item.totalPrice;
      newItems = [...prevState.items];
      newItems[itemIndex] = newItem;
    } else {
      // if item is new one
      newItems = [...prevState.items];
      newItems.push(action.item);
      total = prevState.totalAmount + action.item.totalPrice;
    }
    return {
      items: newItems,
      totalAmount: total,
    };
  }

  if (action.type === "remove") {
    const itemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );

    const item = prevState.items[itemIndex];
    let newItems;
    let total;

    if (item.amount > 1) {
      const newItem = {
        ...item,
        amount: item.amount - 1,
        totalPrice: item.totalPrice - item.price,
      };
      newItems = [...prevState.items];
      newItems[itemIndex] = newItem;
    } else {
      newItems = prevState.items.filter((item) => item.id !== action.id);
    }
    total = prevState.totalAmount - item.price;

    return {
      items: newItems,
      totalAmount: total,
    };
  }

  return initialState;
};

const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartFn, initialState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "add", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "remove", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
