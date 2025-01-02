import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../reducers/CustomerReducer.ts";

const rootReducer = combineReducers({
    customer : CustomerReducer
})

export const store = createStore(rootReducer);