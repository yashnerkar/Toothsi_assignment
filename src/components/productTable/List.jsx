import React from "react";
import Table from "react-bootstrap/Table";
import Buy from "../home/Buy";
import "../css/home.css";
const List = ({
  products,
  name,
  handleCart,
  cartProducts,
  updateCart,
  removeItem,
  Quantity,
}) => {
  return (
    <divs>
      {name === "Home" ? (
        <Table className="rounded-5" style={{ tableLayout: "fixed" }}>
          <thead>
            <tr style={{ backgroundColor: "#DDF2F9", color: "black" }}>
              <th className="text-center  p-3">Image</th>
              <th className="text-center  p-3">Name</th>
              <th className="text-center  p-3">Color</th>
              <th className="text-center  p-3">stock</th>
              <th className="text-center  p-3">Price</th>
              <th className="text-center  p-3">Buy</th>
            </tr>
          </thead>
          <tbody style={{ width: "100%" }}>
            {products.map((product, i) => {
              const bgColor = i % 2 === 1 ? "#fafeff" : "white";
              return (
                <tr
                  key={i}
                  style={{
                    backgroundColor: bgColor,
                    margin: "auto",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <td className="text-center p-3">
                    <img src={product.image} height="60px" alt="products" />
                  </td>
                  <td className="text-center p-3">
                    <div>{product.name}</div>
                  </td>
                  <td className="text-center p-3">
                    <div>{product.features.color}</div>
                  </td>
                  <td className="text-center p-3">
                    {product.instock ? "In stock" : "Out of Stock"}
                  </td>
                  <td className="text-center p-3">${product.price}</td>
                  <td className="text-center p-3">
                    {/* <div style={{ minWidth: "5rem", overflowX: "auto" }}> */}
                    <Buy index={i} handleCart={handleCart} />
                    {/* </div> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Table hover className="border">
          <thead>
            <tr
              className="mt-5"
              style={{
                backgroundColor: "#DDF2F9",
                color: "black",
                margin: "auto",
                alignItems: "center",
                // justifyContent:
                width: "100%",
              }}
            >
              <th className="text-center p-3"></th>
              <th className=" text-center p-3">Product</th>
              <th className=" text-center p-3">Price</th>
              <th className=" text-center p-3">Quantity</th>
              <th className=" text-center p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.length !== 0 ? (
              cartProducts.map((product, index) => {
                return (
                  <tr>
                    <td className="p-3 text-center">
                      <i
                        class="bi bi-x fs-4"
                        id={index}
                        onClick={(e) => removeItem(e)}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </td>
                    <td className="fw-bold p-3 text-center">
                      <img src={product.image} height="30px" alt="" />
                      &nbsp;&nbsp;<span> {product.name}</span>
                    </td>
                    <td className="text-secondary text-center p-3">
                      ${product.price}
                    </td>
                    <td className="p-3 d-flex  justify-content-center">
                      <Quantity product={product} update={updateCart} />
                    </td>
                    <td className="fw-bold  p-3 text-center text-success">
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
      )}
    </divs>
  );
};

export default List;
