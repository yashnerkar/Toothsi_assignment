import React, { useState, useEffect } from 'react'

const Quantity = ({ increment }) => {
    const [count, setCount] = useState(1);
    const incrementCount = () => {
        setCount(count + 1);
        if (count < 1) {
            setCount(1);
        }
    }
    const decrementCount = () => {
        setCount(count - 1);
        if (count <= 1) {
            setCount(1);
        }
    }
    useEffect(() => {
        increment(count);
        // console.log(count);
    }, [count])


    return (
        <div className="border border-dark d-flex align-items-center justify-content-evenly">
            <button className="btn" onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button className="btn" onClick={incrementCount}>+</button>
        </div>
    )
}

export default Quantity