import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getApiDog from './reducers/apiDogs';
const reducer = combineReducers({
    getApiDog
})

const store = createStore(reducer);