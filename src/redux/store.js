import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';/*
esto funciona para monitorear los estados de redux en consola
del navegador*/
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import getApiDog from './reducers/apiDogs';
const reducer = combineReducers({
    getApiDog
})

const store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware(logger ,thunk) )
);