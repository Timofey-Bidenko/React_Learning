import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import CartPage from "./pages/Cart";
import OrderForm from "./pages/OrderForm";
import OrderStatus from "./pages/OrderStatus";

import "./index.css";
import Header from "./components/Header";

import UserContextProvider from "./context/UserContext";
import OrderContextProvider from "./context/OrderContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Header />
        <OrderContextProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrderForm />} />
            <Route path="/orders/:id" element={<OrderStatus />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </OrderContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
