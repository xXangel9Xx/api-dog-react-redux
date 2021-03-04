import axios from 'axios'
export const type = "getApiDog"

const getAapiDog = (dispach) =>{
    return{
        type:type,
        payload:dispach
    }
}
export default getAapiDog