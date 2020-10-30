import React from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux';
const SimpleText = () => {
    const text = useSelector(state => {
        return {
            text: state.text
        }
    },shallowEqual)
    const dispatch = useDispatch()
    console.log('SIMPLE TEXT COMPONENT LOGIC')
    return (
        <div>
            {console.log('SIMPLE TEXT COMPONENT UI')}
            <h4>THIS WILL BE SIMPLE TEXT STATE TO CHECK USEDISPATCH() & MULTIPLE REDUCERS</h4>
            {text.text}
            <button onClick={() => dispatch({ type: 'change' })}>change text</button>
        </div>
    );
}

export default SimpleText;