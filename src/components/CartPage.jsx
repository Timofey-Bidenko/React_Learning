import { cartItems } from "../CartData";
import Header from "./Header";
import Cart from "./Cart";

function CartPage() {
  return (
    <>
      <Header />
      <Cart data={cartItems} />
    </>
  );
}

export default CartPage;
