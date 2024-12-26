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

  const { cart, addItem, incrementItem, decrementItem } = useContext(CartContext);
  const amount = cart.find((item) => item.id === itemId)?.quantity ?? 0;

  const addToCart = () => addItem(itemInfo);
  const handleIncrement = () => incrementItem(itemId);
  const handleDecrement = () => decrementItem(itemId);

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
