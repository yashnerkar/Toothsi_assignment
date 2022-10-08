import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "./DropDown";
import Container from "react-bootstrap/Container";
import Input from "./Input";
import data from "../utils";
import Buy from "./Buy";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState(data);
  const [cartProducts, setCartProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: null,
    size: null,
    price: null,
    stock: true,
  });
  const onChange = (value) => {
    const products = data;
    console.log("value", value);
    const filteredProduct =
      value.length === 0
        ? products
        : products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          );
    setProducts(filteredProduct);
  };

  const resetFilter = () => {
    setFilters({
      category: null,
      size: null,
      price: null,
      stock: true,
    });
    setProducts(data);
  };

  const handleSetFilters = (name, value) => {
    console.log("filters", filters);
    setFilters((state, e) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  console.log("updated filters", filters);
  useEffect(() => {
    const filterProducts = data;
    const newProducts = filterProducts.filter((product) => {
      // return true;
      let filteredProducts = true;
      Object.keys(filters).forEach((key) => {
        if (filters[key] !== null) {
          if (key === "category") {
            filteredProducts =
              filteredProducts && product.features.category === filters[key];
          } else if (key === "size") {
            filteredProducts =
              filteredProducts && product.features.size.includes(filters[key]);
          } else if (key === "price") {
            filteredProducts =
              filteredProducts && product.price <= filters[key];
          } else if (key === "stock") {
            filteredProducts =
              filteredProducts && product.instock === filters[key];
          }
        }
      });
      return filteredProducts;
    });
    setProducts(newProducts);
  }, [filters]);

  const handleCart = (cart, index) => {
    console.log("cart", cart, "index of selected", index);
    products[index].cart = cart.addCart;
    products[index].quantity = cart.items;
    setProducts([...products]);
    const checkoutProducts = products.filter((product) => product.cart);
    setCartProducts(checkoutProducts);
  };

  console.log("filtered products", cartProducts);

  return (
    <div>
      <Container fluid className="d-flex justify-content-between m-0 px-2">
        <div className="d-flex align-items-center  border border-dark">
          <Dropdown
            // options={products}
            handleSetFilters={handleSetFilters}
            filters={filters}
            setFilters={setFilters}
            name={"category"}
          />
          <Dropdown
            // options={size}
            filters={filters}
            handleSetFilters={handleSetFilters}
            setFilters={setFilters}
            name={"size"}
          />
          {/* <Dropdown handleFilter={/> */}
          <button className="btn" onClick={resetFilter}>
            &#x21bb;reset
          </button>
        </div>
        <div className="d-flex  border border-dark align-items-center">
          <div className="d-flex align-items-center p-2">
            <p className="m-0 px-1">Search</p>
            <Input onChange={onChange} />
          </div>
          <Link
            className="btn btn-primary"
            to="/checkout"
            state={{ checkout: cartProducts }}
          >
            Add to Cart
          </Link>
        </div>
      </Container>

      <div className="border border-dark">
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Color</th>
              <th>stock</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr key={i}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.features.color}</td>
                  <td>{product.instock ? "In stock" : "Out of Stock"}</td>
                  <td>${product.price}</td>
                  <td>
                    <Buy index={i} handleCart={handleCart} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
