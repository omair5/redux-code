const initialstate = 0
const CounterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'increment':
            return ++state
        case 'decrement':
            return --state
        case 'reset':
            return 0
        default:
            return state
    }
}

export default CounterReducer;