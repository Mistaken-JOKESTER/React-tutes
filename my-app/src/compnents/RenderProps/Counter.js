import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementCount = () =>{
        this.setState((prevState, props) =>{
            return {
                count: prevState.count + 1
            }
        },() =>{
            console.log(`${this.state.count} is new value`)
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter
