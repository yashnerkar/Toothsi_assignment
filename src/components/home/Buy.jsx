import React, { useEffect, useState } from "react";

const Buy = ({ handleCart, index }) => {
  const [cart, setCart] = useState({
    items: 1,
    addCart: false,
  });
  useEffect(() => {
    handleCart(cart, index);
  }, [cart]);

  return (
    <div>
      <div className=" d-flex align-items-center" style={{ minWidth: "5rem" }}>
        <div className="d-flex align-items-center w-100">
          <input
            type="text"
            className="w-50"
            value={cart.items}
            onChange={(e) =>
              setCart({
                ...cart,
                items: e.target.value,
              })
            }
          />
          <i className="bi bi-cart-fill fs-5 text-dark mx-2"></i>
        </div>
        <input
          type="checkbox"
          className="text-danger"
          style={{ height: "1.5rem", width: "2rem", accentColor: "red" }}
          checked={cart.addCart}
          onClick={(e) => setCart({ ...cart, addCart: !cart.addCart })}
        ></input>
      </div>
    </div>
  );
};

export default Buy;
