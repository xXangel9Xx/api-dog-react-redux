import {search_suggestions, show_data_suggestions} from './types'
import { breedsData } from '../../../dataSuggestions/breeds'
const stateDefault = []
const reducer = (state = stateDefault, {type,payload})=>{
    switch (type) {
        case search_suggestions:
            if(!payload){
                return breedsData;
            }
            const regex = new RegExp(`^${payload}` , 'i');//A regular expression is a sequence of characters that forms a search pattern.
            return breedsData.filter(n => regex.test(n.name));
            
        default: return state
    }
}
export default reducer