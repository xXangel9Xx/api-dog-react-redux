import { type as getApiDog } from '../actions/getApiDog';
import {
    fetch_dogs_request,
    fetch_dogs_succes,
    fetch_dogs_failure} from './userTypes';
const defaultState = {
    loading:false,
    users:[],
    error:''
};
const reducer = ( state = defaultState, {type,payload}) => {
    switch(getApiDog){
        case fetch_dogs_request:{
            return{
                ...state,
                loading:true
            }
        }
        case fetch_dogs_succes:{
            return{
                loading:false,
                users:payload,
                error:''
            }
        }
        case fetch_dogs_failure:{
            return{
                loading:false,
                users:[],
                error:payload
            }
        }
        default: return state
    }
}
export default reducer
