import React,{useEffect} from 'react';
import BarNav from '../../components/barNav/barNav'
import { connect } from 'react-redux';
import { getDog } from '../../redux/actions/getApiDog'
import Letters from '../../components/letters/letters';
const Index = (props) => {
    useEffect(()=>{
        props.getDog()
//   props.dispatch(props.getDog('https://dog.ceo/api/breed/germanshepherd/images/random/10'))
    },[])
    return(
        <div className="container-page-index">
            <BarNav />
            {props.dogs.loading == false?<Letters />:<p>loading</p>
            }
        </div>
    )
}
// Además del state, `connect` agregar `dispatch` en nuestros props.https://dog.ceo/api/breed/germanshepherd/images
const MapStateToProps = (state)=>{
    return{
        dogs: state.dogs
    }
}

const MapDispachToProps = (dispatch) => {
    return {
        getDog: () => dispatch(getDog('https://dog.ceo/api/breed/germanshepherd/images/random/10'))
    }
}


export default connect(MapStateToProps,MapDispachToProps)(Index)

