import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = ({ cartTotals }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Cart totals</Card.Title>
                <div className="d-flex pt-3 justify-content-between  align-items-center">
                    <Card.Title className="mb-2 text-muted">Subtotal</Card.Title>
                    <Card.Text>${cartTotals.subtotal}</Card.Text>
                </div>
                <hr className='mt-2' />
                <div className="d-flex justify-content-between  align-items-center">
                    <Card.Title className="mb-2 text-muted">Total</Card.Title>
                    <Card.Text>${cartTotals.total}</Card.Text>
                </div>
                <Card.Link href="#" className="btn checkout-btn btn-primary px-5 mt-2">Proceed to Checkout</Card.Link>
            </Card.Body>
        </Card>
    )
}


export default Cards;


