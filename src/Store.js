import { createStore, applyMiddleware, compose } from 'redux';
import Rootreducer from "./Services/Reducers/Rootreducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Rootreducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;