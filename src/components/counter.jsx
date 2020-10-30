import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../actions/CounterAction';

const Counter = () => {
    const dispatch = useDispatch()

    // When an action is dispatched, useSelector() will do a reference 
    // comparison of the previous selector result value and the current 
    // result value. If they are different, the component will be forced to 
    // re-render. If they are the same, the component will not re-render.
    
    // Because of the React update batching behavior used in React Redux v7, a dispatched action that causes multiple useSelector()s in the same component to return new values should only result in a single re-render.
    const counter = useSelector(state => state.counter)
    console.log('COUNTER COMPONENT LOGIC')
    return (
        <div>
            {console.log('COUNTER COMPONENT UI')}
            <h1>THIS IS COUNTER COMPONENT</h1>
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())} disabled={counter === 0 && true}>DECREMENT</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </div>
    );
}

export default Counter;

// Reminder: when passing a callback using dispatch to a child component, you should memoize it with useCallback, just like you should memoize any passed callback. This avoids unnecessary rendering of child components due to the changed callback reference. You can safely pass [dispatch] in the dependency array for the useCallback call - since dispatch won't change, the callback will be reused properly (as it should). For example: