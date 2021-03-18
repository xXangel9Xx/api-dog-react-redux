import React from 'react';
import './suggestions.scss'
const SuggestionsJsx = (props) =>{
    function inputChangeValue(e,suggestionsName){
        let input = document.getElementById('input-search-breeds')
        input.value = suggestionsName
    }
    return( 
    <div className="container-suggestions" id="suggestions">
        <div className="suggestions-scroll" id="suggestions-scroll">
            {props.searchBreeds.length >= 0 && props.searchBreeds.map((suggestions,i)=>
                <p className="suggestions-name" 
                id="suggestion" 
                key={i}
                onClick={(e)=>inputChangeValue(e,suggestions.name)}
                >
                    {suggestions.name}
                </p>
            )
            } 
        </div>

    </div>
    )
}
export default SuggestionsJsx