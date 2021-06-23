import React, {Component} from 'react'
import { connect } from 'react-redux';
import { buySweets } from '../redux/index';

function SweetsContiner(props) {
    return (
        <div>
            <h2>Sweets count - {props.numOfSweets} </h2>
            <button onClick={props.buySweets}>buy Sweet</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfSweets: state.sweets.numOfSweets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buySweets: () => dispatch(buySweets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetsContiner)
