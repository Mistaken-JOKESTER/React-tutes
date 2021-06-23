import React, { Component } from 'react'
import { connect } from 'react-redux';
import {buyCake} from '../redux/index';

class NewCakeContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number : 1
        }
    }
    

    render() {
        return (
            <div>
                <input type="number" value={this.state.number} min={1} onChange={e => this.setState({number:e.target.value})} />
                <h1>Number of cakes : {this.props.numOfCakes}</h1>
                <button onClick={() => this.props.buyCake(this.state.number)}>Buy {this.state.number} cake</button>
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
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)
