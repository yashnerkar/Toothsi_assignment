import React from "react";
import Card from "react-bootstrap/Card";
const Totalcart = ({ products }) => {
  let total = 0;
  products.forEach((product) => {
    total += product.subtotal;
  });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="">Cart totals</Card.Title>
        <div className="d-flex pt-4 justify-content-between  align-items-center">
          <Card.Title className="mb-2 text-muted  ">Subtotal</Card.Title>
          <Card.Text className="fw-bold " style={{ color: "#6495ED" }}>
            ${total}
          </Card.Text>
        </div>
        <hr className="mt-2" />
        <div className="d-flex justify-content-between  align-items-center">
          <Card.Title className="mb-2 fw-bold">Total</Card.Title>
          <Card.Text className="fw-bold" style={{ color: "#0047AB" }}>
            ${total}
          </Card.Text>
        </div>
        <div className="d-flex justify-content-center">
          <Card.Link
            href="/thanks"
            className="btn px-4 text-center text-light py-2 mt-3"
            style={{ backgroundColor: "#0047AB", borderRadius: "20px" }}
          >
            Proceed to Checkout
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Totalcart;
