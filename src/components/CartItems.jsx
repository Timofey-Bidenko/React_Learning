import CartItem from "./CartItem";

function CartItems({ data }) {
  return (
    <div className="cart-items">
      {data.map((itemInfo) => (
        <CartItem itemInfo={itemInfo} key={itemInfo.id} />
      ))}
    </div>
  );
}

export default CartItems;
