import React, { useState } from "react";
import Table from "../productTable/List";
import Card from "./Totalcart";
import "../css/check.css";
import Quantity from "./Quantity";
import { useLocation } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();

  const { checkout } = location.state;

  const [cartTotals, setCartTotals] = useState({
    subtotal: 1,
    total: 0,
  });
  const [products, setProducts] = useState(checkout);
  const updateCart = (count, product) => {
    if (product.cart) {
      product.quantity = count;
      product.subtotal = product.price * product.quantity;
    }

    setProducts([...products]);
    finalCart();
  };

  const finalCart = () => {
    products.forEach((product) => {
      if (product.cart) {
        cartTotals.subtotal += product.subtotal;
        cartTotals.total += product.subtotal;
      }
    });
    setCartTotals({ ...cartTotals });
  };

  const removeItem = (e) => {
    const index = e.target.id;
    const newProducts = products.filter((product, i) => i !== parseInt(index));
    setProducts(newProducts);
  };

  return (
    <div className="container-fluid ">
      <div className="row p-4">
        <div className="col-md-8 col-sm-8 col-12 mt-5">
          <Table
            cartProducts={products}
            updateCart={updateCart}
            removeItem={removeItem}
            Quantity={Quantity}
            name="checkout"
          />
        </div>
        <div className="col-md-4 col-sm-4 col-12 mt-5">
          <Card products={products} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
