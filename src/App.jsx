import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import CircularLoading from "./components/CircularLoading";

const LazyLoginPage = lazy(() => import("./pages/Login/Login"));
const LazyMenuPage = lazy(() => import("./pages/Menu/Menu"));
const LazyCartPage = lazy(() => import("./pages/Cart/Cart"));
const LazyOrderForm = lazy(() => import("./pages/OrderForm/OrderForm"));
const LazyOrderStatus = lazy(() => import("./pages/OrderStatus/OrderStatus"));

import "./index.css";
import Header from "./components/Header";

import UserContextProvider from "./context/UserContext";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Suspense fallback={<CircularLoading />}><LazyLoginPage /></Suspense>} />
            <Route path="/menu" element={<Suspense fallback={<CircularLoading />}><LazyMenuPage /></Suspense>} />
            <Route path="/cart" element={<Suspense fallback={<CircularLoading />}><LazyCartPage /></Suspense>} />
            <Route path="/order" element={<Suspense fallback={<CircularLoading />}><LazyOrderForm /></Suspense>} />
            <Route path="/orders/:id" element={<Suspense fallback={<CircularLoading />}><LazyOrderStatus /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<CircularLoading />}><LazyLoginPage /></Suspense>} />
          </Routes>
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
