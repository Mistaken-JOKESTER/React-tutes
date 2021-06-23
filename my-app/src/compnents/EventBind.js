import React, { Component } from 'react'

// approaches for binding event handler
// bind in tag *********************** dont use due to performance issues
// use arrow function in tag  ******** use when require parameters
// bind handler in cunstroctor ******* use if it is used multiple times
// use arrow function while defining handler
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }

    clickHandler = () => {
        console.log(this)
        this.setState({
            message:'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Event binding</button> */}
                {/* <button onClick={() => this.clickHandler()}>Event binding</button> */}
                <button onClick={this.clickHandler}>Event binding</button>
            </div>
        )
    }
}

export default EventBind
