import React from 'react';
import { connect } from 'react-redux';
const Index = (props) => {
    return(
        <div className="container-page-index">
            <p>hola mundo</p>
        </div>
    )
}

const MapStateToProps = (state)=>{
    return{

    }
}

const MapDispachToProps = {

}

export default connect(MapStateToProps,MapDispachToProps)(Index)
