import React, { useEffect } from 'react';
import {suggestionsSearch, resetSuggestions} from '../../../../redux/actions/suggestion';
import SuggestionsJsx from '../suggestions/suggestions';
import { getDog } from '../../../../redux/actions/getApiDog'
import { connect } from 'react-redux';
import Search from '../../../../assets/search.png'
import './input.scss'

const Input = (props) => {
    function searchFindSuggestions(e){props.suggestionsSearch(e.target.value)}
    function initalDisplaySuggestions(){
        let suggestion = document.getElementById('suggestions')
        let suggestionScroll = document.getElementById('suggestions-scroll')
        suggestion.style.display = "block"
        suggestionScroll.style.display="block"

    }
    function ocultSuggestionContainer(number){
        setTimeout(()=>{
            let suggestion = document.getElementById('suggestions')
            let suggestionScroll = document.getElementById('suggestions-scroll')
            suggestion.style.display = "none"
            suggestionScroll.style.display="none"
            props.resetSuggestions() 
        },number)

    }
    function getDog(e){
        e.preventDefault()
        let getBreeds = document.getElementById('input-search-breeds').value
        getBreeds = getBreeds.toLowerCase()
    }
    useEffect(()=>{
        ocultSuggestionContainer(0)
    },[])
    
    
    return (
        <div className="container-input">
            <i className="fas fa-paw"></i>
            <div className="container-form">
                <form className="form">
                    <button type="submit" className="button" onClick={(e)=>getDog(e)}>
                        <img src={Search} alt="" className="image-search"/>
                    </button>
                    <input type="text" className="input"
                        id="input-search-breeds"
                        onChange={(e)=>searchFindSuggestions(e)}
                        onFocus={(e)=>initalDisplaySuggestions()}
                        onBlur={(e)=>ocultSuggestionContainer(150)}
                    />
                </form>
                <SuggestionsJsx 
                    searchBreeds={props.searchBreeds}
                />
            </div>
            <i className="fas fa-paw"></i>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        searchBreeds: state.searchBreeds
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
            suggestionsSearch,
            resetSuggestions,
            //getDog:()=>dispatch(getDog())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Input)
// onFocus => cuando esta encima del input
// onFocusOut => onBlur => cuando el click sale del input