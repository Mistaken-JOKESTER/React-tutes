import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbInputRef = null
        this.setRef = element =>{
            this.cbInputRef = element
        }
    }
    
    clickHandler = () =>{
        console.log(this.inputRef)
        alert(this.cbInputRef.value)
    }

    componentDidMount() {
        console.log(this.cbInputRef)
        if(this.cbInputRef){
            this.cbInputRef.focus()
        }
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
