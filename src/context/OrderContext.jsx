import { createContext, useState } from "react";

export const OrderContext = createContext(null);

function OrderContextProvider({ children }) {
  const [orderPrice, setOrderPrice] = useState({});
  const [orderDetails, setOrderDetails] = useState({})

  const orderValue = {
    orderPrice: orderPrice,
    setOrderPrice: setOrderPrice,
    orderDetails: orderDetails,
    setOrderDetails: setOrderDetails
  };

  return (
    <OrderContext.Provider value={orderValue}>{children}</OrderContext.Provider>
  );
}

export default OrderContextProvider;
