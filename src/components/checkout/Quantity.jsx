import React, { useState, useEffect } from "react";
import "../css/quant.css";
const Quantity = ({ update, product }) => {
  const [count, setCount] = useState(parseInt(product.quantity));
  const incrementCount = () => {
    setCount(count + 1);
    if (count < 1) {
      setCount(1);
    }
  };
  const decrementCount = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  useEffect(() => {
    update(count, product);
  }, [count]);

  return (
    <div className="quant-div w-50 d-flex align-items-center justify-content-evenly ">
      <button className="btn border-0" onClick={decrementCount}>
        -
      </button>
      <span>{count}</span>
      <button className="btn border-0" onClick={incrementCount}>
        +
      </button>
    </div>
  );
};

export default Quantity;
