import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';/*
esto funciona para monitorear los estados de redux en consola
del navegador*/
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dogs from './reducers/apiDog/apiDogs';
import searchBreeds from './reducers/suggestions/suggestionsReducer';
const reducer = combineReducers({
    dogs,
    searchBreeds
})

const store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware(logger ,thunk) )
);

export default store