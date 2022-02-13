import {applyMiddleware, createStore, compose}  from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/Reducer'

const composeHacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeHacer(applyMiddleware(thunk))) 

export default store;

