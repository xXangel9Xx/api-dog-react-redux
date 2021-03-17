import { search_suggestions,reset_suggestions } from '../reducers/suggestions/types';

export const suggestionsSearch = (suggestions) => {
    return{
        type: search_suggestions,
        payload:suggestions
    }
}



export const resetSuggestions = (payload) => {
    return{
        type:reset_suggestions,
        payload:payload
    }
}