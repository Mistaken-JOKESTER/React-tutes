import React, { Component } from 'react'

class ClasscounterOne extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count  !== this.state.count){
            console.log(this.state, 'updating title')
            document.title = `Clicked ${this.state.count} times`
        }
    }
    

    render() {
        return (
            <div>
                <button onClick={() =>this.setState((prevState, props) => ({count:prevState.count +1}))}>
                    Click {this.state.count} times.
                </button>
                <input type='text' value={this.state.name} placeholder='Name' onChange={(e) => this.setState({name:e.target.value})}/>
            </div>
        )
    }
}

export default ClasscounterOne
