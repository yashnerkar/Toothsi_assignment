import React, { useState, useEffect } from "react";
import Table from "../productTable/List";
import Dropdown from "./DropDown";
import Container from "react-bootstrap/Container";
import Input from "../input/Input";
import data from "../../utils";
import "../css/home.css";

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
    setFilters((state, e) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

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
    products[index].cart = cart.addCart;
    products[index].quantity = cart.items;
    setProducts([...products]);
    const checkoutProducts = products.filter((product) => product.cart);
    setCartProducts(checkoutProducts);
  };

  return (
    <div>
      <div className="container" style={{ minHeight: "100vh" }}>
        <Container
          fluid
          className="d-flex align-responsive justify-content-between mt-5 flex-wrap"
        >
          <div className="d-flex align-items-center">
            <Dropdown
              handleSetFilters={handleSetFilters}
              filters={filters}
              setFilters={setFilters}
              name={"category"}
            />
            <Dropdown
              filters={filters}
              handleSetFilters={handleSetFilters}
              setFilters={setFilters}
              name={"size"}
            />
            <button
              className="btn text-dark mx-2 "
              style={{ backgroundColor: "#DDF2F9" }}
              onClick={resetFilter}
            >
              &#x21bb; &nbsp;reset
            </button>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center p-2">
              <p className="my-0 mx-2 px-2 btn text-dark btn-outlined">
                Search
              </p>
              <Input onChange={onChange} />
            </div>
            <Link
              className="btn btn-danger px-3 cartBtn"
              to="/checkout"
              style={{}}
              state={{ checkout: cartProducts }}
            >
              Add to Cart
            </Link>
          </div>
        </Container>
        <div className=" mt-3">
          <Table products={products} handleCart={handleCart} name="Home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
