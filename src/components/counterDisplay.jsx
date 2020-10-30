import React from 'react';
import { useSelector } from 'react-redux';
const CounterDisplay = () => {
    const counter = useSelector(state => state.counter)
    console.log('COUNTER DISPLAY COMPONENT LOGIC')
    return (
        <div>
            {console.log('COUNTER DISPLAY COMPONENT UI')}
            <h1>THIS IS COUNTER DISPLAY COMPONENT</h1>
            <h3>COUNTER VALUE: {counter}</h3>
        </div>
    )
}
export default CounterDisplay