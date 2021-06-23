import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ankit'
        }

        console.log('lifecycleA custroctor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getdrove state from state')
        //you have to reaturn object as states and props or return null
        return null
    }
    
    componentDidMount() {
        console.log('lifecycleA component did mount')
        //http calls are made here or ajax calls are made here
    }

    shouldComponentUpdate() {
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUPadate')
        return null
    }

    componentDidUpdate() {
        console.log('lifecycleA componentDidUpdate')
        //http or ajax calls are made here
    }

    changeState = () =>{
        this.setState({
            name:'pixelMan'
        })
    }

    render() {
        console.log('lifecycleA render')
        return (
            <div>
                LifecycleA
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }

}

export default LifecycleA
