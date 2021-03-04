import axios from 'axios'
import { 
    fetch_user_request ,
    fetch_users_failure,
    fetch_user_succes 
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
        type:fetch_user_request 
    }
}

export const fetchDogsSucces = (users) =>{
    return {
        type:fetch_user_succes,
        payload:users
    }
}
export const fetchDogsFailure = () =>{
    return {
        type: fetch_users_failure,
        payload:error
    }
}