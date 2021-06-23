import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ankit'
        }

        console.log('lifecycleB custroctor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleB getdrove state from state')
        //you have to reaturn object as states and props or return null
        return null
    }
    
    componentDidMount() {
        console.log('lifecycleB component did mount')
        //http calls are made here or ajax calls are made here
    }

    shouldComponentUpdate() {
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUPadate')
        return null
    }

    componentDidUpdate() {
        console.log('lifecycleB componentDidUpdate')
        //http or ajax calls are made here
    }

    render() {
        console.log('lifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }

}

export default LifecycleB
