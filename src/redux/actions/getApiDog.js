import axios from 'axios'
import { 
    fetch_dogs_request ,
    fetch_dogs_failure,
    fetch_dogs_succes 
    } from '../reducers/apiDog/types';
//export const type = "getApiDog"
export const fetchDogsRequest = () =>{
    return {
        type:fetch_dogs_request 
    }
}

export const fetchDogsSucces = (dogs) =>{
    return {
        type:fetch_dogs_succes,
        payload:dogs
    }
}
export const fetchDogsFailure = (error) =>{
    return {
        type: fetch_dogs_failure,
        payload:error
    }
}
export const getIndex =  () =>{
    return (dispatch) =>{
        dispatch(fetchDogsRequest())
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response=>{
            const dogs = response.data
            dispatch(fetchDogsSucces(dogs))
        }).catch(error => {
            dispatch(fetchDogsFailure(error.message))
        })
    }
}
