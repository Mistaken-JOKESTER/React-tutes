import React, { Component } from 'react'
import Child from './child'

class ForwardRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <h1>Ref forwarding</h1>
                <Child ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default ForwardRef
