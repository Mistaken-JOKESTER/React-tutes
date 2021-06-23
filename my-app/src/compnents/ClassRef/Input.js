import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.InputRef= React.createRef()
    }
    
    focusInput(){
        this.InputRef.current.focus()
    }

    showValue = () =>{
        alert(this.InputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.InputRef}/>
            </div>
        )
    }
}

export default Input
