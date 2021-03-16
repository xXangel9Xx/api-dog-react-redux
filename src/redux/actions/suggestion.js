import { search_suggestions } from '../reducers/suggestions/types';

const suggestionsSearch = (suggestions) => {
    return{
        type: search_suggestions,
        payload:suggestions
    }
}
export default suggestionsSearch