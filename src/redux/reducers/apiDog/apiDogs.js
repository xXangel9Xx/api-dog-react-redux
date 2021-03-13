//import { type as getApiDog } from '../actions/getApiDog';
import {
    fetch_dogs_request,
    fetch_dogs_succes,
    fetch_dogs_failure} from './types';
const defaultState = {
    loading:false,
    dogs:[],
    error:''
};
const reducer = ( state = defaultState, {type,payload}) => {
    switch(type){
        case fetch_dogs_request:
            return{
                ...state,
                loading:true
            }
        case fetch_dogs_succes:
            return{
                ...state,
                loading:false,
                dogs:payload
            }
        case fetch_dogs_failure:
            return{
                loading:false,
                dogs:[],
                error:payload
            }
        default: return state
    }
}
export default reducer
