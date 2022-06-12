import {combineReducers} from 'redux';
import { reducer } from "./reducer";

const rootReducer = combineReducers({
    info: reducer
})

export default rootReducer;
