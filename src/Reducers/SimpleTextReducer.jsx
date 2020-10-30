const initialstate = 'hello'
const SimpleTextReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'change':
            return 'bye'
        default:
            return state
    }
}

export default SimpleTextReducer;