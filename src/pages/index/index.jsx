import React,{useEffect} from 'react';
import './index.scss'
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
            {props.dogsState.loading == false?
            
                <div className="container-body">
                    {props.dogsState.dogs.message && props.dogsState.dogs.message.map((resDogs,i)=> 
                        <Letters
                            key={i}
                            dogs={resDogs}
                        />   
                        
                    )}
                  
                </div>

            :<p>loading</p>
            }
        </div>
    )
}
// Además del state, `connect` agregar `dispatch` en nuestros props.https://dog.ceo/api/breed/germanshepherd/images
const MapStateToProps = (state)=>{
    return{
        dogsState: state.dogs
    }
}

const MapDispachToProps = (dispatch) => {
    return {
        getDog: () => dispatch(getDog('https://dog.ceo/api/breed/germanshepherd/images/random/30'))
    }
}


export default connect(MapStateToProps,MapDispachToProps)(Index)

