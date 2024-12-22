import { useEffect, useState } from "react";
import Button from "./Button";
import Counter from "./Counter";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import capitalize from "../utils/capitalize";

function Item({ itemInfo }) {
  const name = itemInfo.name ?? "ItemName";
  const img = itemInfo.imageUrl ?? "/placeholder.svg?height=100&width=100";
  const price = itemInfo.unitPrice ? `€${itemInfo.unitPrice}.00` : "€123.00";
  const ingredients = capitalize(itemInfo.ingredients.join(", "));
  const itemId = itemInfo.id;

  const [amount, setAmount] = useState(0);
  const { cart, dispatchCart } = useContext(CartContext);

  const addToCart = () => {
    setAmount(1);
    dispatchCart({ type: "Add", payload: {
      name: itemInfo.name,
      id: itemId,
      price: itemInfo.unitPrice,
    } });
  };
  const handleIncrement = () => {
    setAmount((last) => last + 1);
    dispatchCart({ type: "Increment", payload: {id: itemId}});
  };
  const handleDecrement = () => {
    if (amount === 1) {
      setAmount(0)
      dispatchCart({ type: "Remove", payload: {id: itemId}});
    } else {
      setAmount((last) => Math.max(last - 1, 1))
      dispatchCart({ type: "Decrement", payload: {id: itemId}});
    }
  };

  useEffect(() => {
    const cartItem = cart.find((item) => item.id === itemId);
    if (cartItem) {
      setAmount(cartItem.quantity);
    }
  }, []);

  return (
    <div className="pizza-item">
      <img src={img} alt={`${name} Pizza`} className="pizza-image" />
      <div className="pizza-info">
        <h2>{name}</h2>
        <p className="ingredients">{ingredients}</p>
        {itemInfo.soldOut ? (
          <p className="sold-out">SOLD OUT</p>
        ) : (
          <p className="price">{price}</p>
        )}
      </div>
      {!itemInfo.soldOut && (
        <div className="cart-controls">
          <Button
            classes="add-to-cart"
            text="ADD TO CART"
            onClick={addToCart}
            visible={amount <= 0}
          />
          <Counter
            decrementCallback={handleDecrement}
            incrementCallback={handleIncrement}
            value={amount}
            visible={amount > 0}
          />
        </div>
      )}
    </div>
  );
}

export default Item;
