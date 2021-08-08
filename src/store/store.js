import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { searchReducer } from "../reducers/searchReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    search: searchReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))    
);