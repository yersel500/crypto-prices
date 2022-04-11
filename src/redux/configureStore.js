import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { CryptoReducer } from './CryptoReducer';

const store = createStore(CryptoReducer, applyMiddleware(thunk, logger));

export default store;
