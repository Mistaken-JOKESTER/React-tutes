import React, { Component } from 'react'
import Input from './Input'

class Focus extends Component {
    constructor(props) {
        super(props)
        this.focusInputref = React.createRef()
    }
    
    clickHandler = () => {
        this.focusInputref.current.focusInput()
        //this.focusInputref.current.showValue()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.focusInputref}/>
                <button onClick={this.clickHandler}>Focous</button>
            </div>
        )
    }
}

export default Focus
