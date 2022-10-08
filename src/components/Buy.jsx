import React, { useEffect, useState } from "react";

const Buy = ({ handleCart, index }) => {
  const [cart, setCart] = useState({
    items: 1,
    addCart: false,
  });
  console.log(cart.addCart);
  useEffect(() => {
    handleCart(cart, index);
  }, [cart]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={cart.items}
          onChange={(e) =>
            setCart({
              ...cart,
              items: e.target.value,
            })
          }
        />
        <span>Buy</span>
        <input
          type="checkbox"
          checked={cart.addCart}
          onClick={(e) => setCart({ ...cart, addCart: !cart.addCart })}
        ></input>
      </div>
    </div>
  );
};

export default Buy;
