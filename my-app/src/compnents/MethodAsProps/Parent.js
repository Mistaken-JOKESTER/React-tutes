import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:"John Bush"
        }
    }
    
    clickHandler = (childName) =>{
        alert(`Hello to ${this.state.parentName} by ${childName}`)
    }
    
    render() {
        return (
            <div>
                <Child greetHandler={this.clickHandler}/>    
            </div>
        )
    }
}

export default Parent
