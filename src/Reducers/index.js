import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer'
import SimpleTextReducer from './SimpleTextReducer'

export default combineReducers({counter: CounterReducer, text: SimpleTextReducer})