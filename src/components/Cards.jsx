import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = ({ products }) => {
    let total = 0;
    products.forEach(product => {
        total += product.subtotal;
    });

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title className="">Cart totals</Card.Title>
                <div className="d-flex pt-4 justify-content-between  align-items-center">
                    <Card.Title className="mb-2 text-muted ">Subtotal</Card.Title>
                    <Card.Text className='fw-bold '>${total}</Card.Text>
                </div>
                <hr className='mt-2' />
                <div className="d-flex justify-content-between  align-items-center">
                    <Card.Title className="mb-2 text-muted ">Total</Card.Title>
                    <Card.Text className='fw-bold'>${total}</Card.Text>
                </div>
                <div className="d-flex justify-content-center">

                    <Card.Link href="#" className="btn  btn-primary px-4 text-center py-2 mt-3">Proceed to Checkout</Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}


export default Cards;


