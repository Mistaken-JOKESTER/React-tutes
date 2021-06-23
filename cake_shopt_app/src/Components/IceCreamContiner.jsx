import React, { Component } from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/index';

class IceCreamContainer extends Component {
    render() {
        return (
            <div>
                <h1>Number of Ice Cremas : {this.props.numOfIceCream}</h1>
                <button onClick={this.props.buyIceCream}>Buy Ice Crema</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
