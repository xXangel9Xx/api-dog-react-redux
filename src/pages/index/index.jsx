import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getIndex } from '../../redux/actions/getApiDog'
const Index = (props) => {
    useEffect(()=>{
        props.getIndex()
    },[])
    return(
        <div className="container-page-index">
            <p>Api Dogs</p>
        </div>
    )
}
// Además del state, `connect` agregar `dispatch` en nuestros props.
const MapStateToProps = (state)=>{
    return{
        getApiDog: state.getApiDog
    }
}

const MapDispachToProps = (dispatch) => {
    return {
        getIndex: () => dispatch(getIndex())
    }
}

export default connect(MapStateToProps,MapDispachToProps)(Index)
