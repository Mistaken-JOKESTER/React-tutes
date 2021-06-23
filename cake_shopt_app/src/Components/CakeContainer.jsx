import React, { Component } from 'react'
import { connect } from 'react-redux';
import {buyCake} from '../redux/index';

class CakeContainer extends Component {
    render() {
        return (
            <div>
                <h1>Number of cakes : {this.props.numOfCakes}</h1>
                <button onClick={this.props.buyCake}>Buy cake</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
