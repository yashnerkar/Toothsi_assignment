import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "./Cards";
import "./check.css";
import Quantity from "./Quantity";
import { useLocation } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();
  console.log("location", location);
  const { checkout } = location.state;
  console.log("checkoutProducts", checkout);
  const [cartTotals, setCartTotals] = useState({
    subtotal: 1,
    total: 0,
  });
  const [products, setProducts] = useState(checkout);
  const updateCart = (count, product) => {
    console.log("count", count);
    console.log("product", product);
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
    console.log("remove item");
  };

  return (
    <div className="container-fluid check-div">
      <div className="row p-4">
        <div className="col-md-8 mt-5">
          <Table hover className="border">
            <thead>
              <tr className="mt-5">
                <th className=""></th>
                <th className=" text-center">Product</th>
                <th className=" text-center">Price</th>
                <th className=" text-center">Quantity</th>
                <th className=" text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <tr>
                      <td
                        className="p-2 text-center"
                        id={index}
                        onClick={(e) => removeItem(e)}
                      >
                        x
                      </td>
                      <td className="fw-bold p-2 text-center ">
                        {product.name}
                      </td>
                      <td className="text-secondary text-center p-2">
                        ${product.price}
                      </td>
                      <td className="p-2 d-flex  justify-content-center">
                        <Quantity product={product} update={updateCart} />
                      </td>
                      <td className="fw-bold  p-2 text-center text-success">
                        ${product.subtotal}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div className="d-flex">
                  <h4 className="text-center">No items in cart</h4>
                </div>
              )}
            </tbody>
          </Table>
        </div>
        <div className="col-md-4 mt-5">
          <Card products={products} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
