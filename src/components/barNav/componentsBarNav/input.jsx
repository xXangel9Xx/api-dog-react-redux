import React from 'react';
import {suggestionsSearch} from '../../../redux/actions/suggestion';
import { connect } from 'react-redux';
import Search from '../../../assets/search.png'
import './input.scss'
const Input = (props) => {
    function searchFindSuggestions(e){props.suggestionsSearch(e.target.value)}
    return (
        <div className="container-input">
            <i className="fas fa-paw"></i>
            <form className="form">
                <button type="submit" className="button">
                    <img src={Search} alt="" className="image-search"/>
                </button>
                <input type="text" className="input"
                    onChange={(e)=>searchFindSuggestions(e)}
                    onClick={(e)=>searchFindSuggestions(e)}
                />

            </form>
            <i className="fas fa-paw"></i>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        searchBreeds: state.searchBreeds
    }
}
const mapDispatchToProps = {
    suggestionsSearch
}
export default connect(mapStateToProps,mapDispatchToProps)(Input)
// onClick={(e)=>functResults(e)}