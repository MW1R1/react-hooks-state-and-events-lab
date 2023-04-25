import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <li className={cart.includes(name) ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart(name)}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
