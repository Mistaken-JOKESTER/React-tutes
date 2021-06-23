import React, { Component } from 'react'
import { connect } from 'react-redux';
import {buyCake, buyIceCream} from '../redux/index';


function ItemContainer(props) {
        return (
            <div>
                <h3>{props.numOfCakes}</h3>
                <button onClick={props.buyItem} >Buy Item</button>
            </div>
        )
}

const mapStateToProps = (state, ownProps) => {
    return {
        numOfCakes: ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}

export default connect(
    //put null in place of mastateto props if you don't want to get states.
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)
