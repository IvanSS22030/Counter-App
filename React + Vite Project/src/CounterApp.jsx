import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function CounterApp({ value }) {
    
    const [Counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(Counter + 1);
    }

    const handleSubtract = () => {
        setCounter(Counter - 1);
    }

    const reset = () => {
        setCounter(value);
    }
    
    return (
        <>
            <h1>Counter App</h1>
            <h2>{Counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
