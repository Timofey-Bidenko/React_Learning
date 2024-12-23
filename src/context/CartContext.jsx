import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

function cartReducer(state, action) {
  function updateQuantity(delta) {
    const newState = state.map((item) => {
      if (!item || item.id !== action.payload.id) {
        return item;
      }
      const newQuantity = item.quantity + delta;
      if (newQuantity <= 0) {
        return;
      } else {
        return { ...item, quantity: newQuantity };
      }
    });
    return newState.filter((item) => item);
  }

  switch (action.type) {
    case "Add":
      const isItemAlreadyThere = state.find(
        (item) => item.id === action.payload.id
      );
      return isItemAlreadyThere
        ? updateQuantity(1)
        : [...state, { ...action.payload, quantity: 1 }];
    case "Increment":
      return updateQuantity(1);
    case "Decrement":
      return updateQuantity(-1);
    case "Remove":
      return state.filter(
        (item) => "id" in item || item.id !== action.payload.id
      );
    case "Clear":
      return [];
    default:
      return state;
  }
}

function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const cartValue = {
    cart: cart,
    dispatch: dispatch,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
