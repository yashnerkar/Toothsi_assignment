import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from './Cards';
import Quantity from './Quantity';
const Checkout = () => {
    const [cartTotals, setCartTotals] = useState({
        subtotal: 1,
        total: 0
    });

    const [products, setProducts] = useState([{
        name: "hoodie",
        price: 21,
        cart: true
    }, {
        name: "t-shirt",
        price: 15,
        cart: true
    },
    {
        name: "pants",
        price: 25,
        cart: true
    }])

    const incrementSubTotal = (count) => {
        console.log(count);
        setCartTotals({
            subtotal: products[0].price * count,
        })
    };
    // console.log(products);
    const removeItem = (e) => {
        const index = e.target.id;
        const newProducts = products.filter((product, i) => i !== parseInt(index));
        setProducts(newProducts);
        console.log("remove item");
    }
    console.log("new product list", products);
    return (
        <div className="container-fluid" >
            <div className="row p-4">
                <div className="col-md-6 mt-5 border border-dark">
                    <Table hover >
                        <thead>
                            <tr className="mt-5">
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="1" onClick={(e) => removeItem(e)}>x</td>
                                <td>{products[0].name}</td>
                                <td>{products[0].price}</td>
                                <td><Quantity increment={incrementSubTotal} /></td>
                                <td>{cartTotals.subtotal}</td>
                            </tr>
                            {/* <tr>
                                <td>x</td>
                                <td>"hoodie image"</td>
                                <td>Fron-illustration T-shirt-Red</td>
                                <td><Quantity /></td>
                                <td>{cartTotals.subtotal}</td>
                            </tr> */}

                        </tbody>
                    </Table>
                </div>
                <div className="col-md-6 mt-5">
                    <Card cartTotals={cartTotals} />
                </div>


            </div>


        </div >
    )
}

export default Checkout