import axios from 'axios'
import { 
    fetch_dogs_request ,
    fetch_dogs_failure,
    fetch_dogs_succes 
    } from '../reducers/userTypes';
export const type = "getApiDog"

export const getIndex = () =>{
    return (dispatch) =>{
        dispatch(fetchDogsRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data
            dispatch(fetchDogsSucces(users))
        }).catch(error => {
            dispatch(fetchDogsFailure(error.message))
        })
    }
}

export const fetchDogsRequest = () =>{
    return {
        type:fetch_dogs_request 
    }
}

export const fetchDogsSucces = (users) =>{
    return {
        type:fetch_dogs_succes,
        payload:users
    }
}
export const fetchDogsFailure = (error) =>{
    return {
        type: fetch_dogs_failure,
        payload:error
    }
}