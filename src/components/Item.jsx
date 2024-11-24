import { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function Item({ itemInfo }) {
  const name = itemInfo.name ?? "ItemName";
  const img = itemInfo.imageUrl ?? "/placeholder.svg?height=100&width=100";
  const price = itemInfo.unitPrice ? `€${itemInfo.unitPrice}.00` : "€123.00";
  const ingredients = capitalize(itemInfo.ingredients.join(", "));

  const [amount, setAmount] = useState(0);

  const handleIncrement = () => setAmount((last) => last + 1);
  const handleDecrement = () => setAmount((last) => Math.max(last - 1, 0));

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
            onClick={handleIncrement}
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
