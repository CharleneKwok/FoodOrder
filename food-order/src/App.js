import React from "react";
import Meal from "./components/Main/Meal";
import Nav from "./components/Nav/Nav";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Meal />
    </CartProvider>
  );
}

export default App;
