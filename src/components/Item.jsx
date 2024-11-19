import Button from './Button'

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function Item({ itemInfo }) {
  const name = itemInfo["name"] ? itemInfo["name"] : "ItemName";
  const img = itemInfo["imageUrl"]
    ? itemInfo["imageUrl"]
    : "/placeholder.svg?height=100&width=100";
  const price = itemInfo["unitPrice"]
    ? "€" + itemInfo["unitPrice"] + ".00"
    : "€123.00";

  const ingridientsString = itemInfo.ingredients.reduce(
    (all, v) => all + ", " + v
  );
  const ingridients = capitalize(ingridientsString);

  return (
    <div class="pizza-item">
      <img src={img} alt={name + " Pizza"} class="pizza-image" />
      <div class="pizza-info">
        <h2>{name}</h2>
        <p class="ingredients">{ingridients}</p>
        {!itemInfo["soldOut"] && <p class="price">{price}</p>}
        {itemInfo["soldOut"] && <p class="sold-out">SOLD OUT</p>}
      </div>
      {!itemInfo["soldOut"] && (
        <Button classes="add-to-cart" text="ADD TO CART" />
      )}
    </div>
  );
}

export default Item;
