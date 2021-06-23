import React, { Component } from 'react'

class Subscribe extends Component {
    constructor(){
        super()
        this.state={
            message:'Subscribe to channel.',
            btnMessage:'Subscribe'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank You for subscribing.',
            btnMessage:'Unsubscribe'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.btnMessage}</button>
            </div>
        )
    }
}

export default Subscribe