import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{
        //     console.log(this.state.count)
        // })
        this.setState((prevState, props) =>({
            count : prevState.count + Number(props.amount)
        }), ()=>{
            console.log(this.state.count)
        })
    }

    increaseCount(){
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.increaseCount()}>Increase</button>
            </div>
        )
    }
}

export default Count
