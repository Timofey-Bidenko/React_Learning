import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

function cartReducer(state, action) {
  function updateQuantity(delta) {
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
        : item
    );
  }

  switch (action.type) {
    case "Add":
      const isItemAlreadyThere = state.find((item) => item.id === action.payload.id);
      return isItemAlreadyThere ? updateQuantity(1) : [...state, { ...action.payload, quantity: 1 }];
    case "Increment":
      return updateQuantity(1);
    case "Decrement":
      return updateQuantity(-1);
    case "Remove":
      return state.filter((item) => item.id !== action.payload.id);
    case "Clear":
      return [];
    default:
      return state;
  }
}


function CartContextProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const cartValue = {
    cart: cart,
    dispatchCart: dispatchCart
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
