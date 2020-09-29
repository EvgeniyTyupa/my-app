import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import storeReducer from './storeReducer';
import basketReducer from "./basketReducer";

let reducers = combineReducers({
    storeReducer,
    basketReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;