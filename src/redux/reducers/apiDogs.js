import {type as getApiDog } from '../actions/getApiDog';
import axios from 'axios';
const defaultState = {}
function reducer(state = defaultState, {type,payload}){
    switch(type){
        case getApiDog:{
           /*const dogs = await axios.get('asd').then((res)=>{
               return JSON.parse(res)
            })*/
        }
        default:
            return state
    }
}
export default reducer