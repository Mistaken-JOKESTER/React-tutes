import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponentDemo from './PureComponent'
import MemoComp from '../MemoComp'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ankit'
        }
    }
    
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:'Ankit'
            })
        }, 2000)
    }

    render() {
        console.log('******************Parent Component*******************')
        return (
            <div>
                Parent Component
                {/* pure component will render is there is any change in 
                    state of props while doing the sallow caparison */}
                {/* <PureComponentDemo name={this.state.name}/>
                <RegularComponent name={this.state.name}/> */}
                <MemoComp />
            </div>
        )
    }
}

export default Parent
