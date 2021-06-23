import React, { Component } from 'react'

class Classcounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    incrementCount = () =>{
        this.setState((prevState, props) =>({
                count:prevState.count + 1
        }),() =>{
            console.log('incremented')
        })
    }

    render() {
        console.log(this.state)
        const { count } = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times.</button>
            </div>
        )
    }
}

export default Classcounter
