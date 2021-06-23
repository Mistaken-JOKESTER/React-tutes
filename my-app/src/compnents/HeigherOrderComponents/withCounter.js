import React from 'react'

const withCounter = (WrapperComponent, incrementAmount) => { 
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
        
        incrementCount = () => {
            this.setState((prevState, props) =>{
                return  {count: prevState.count + incrementAmount}
            }, () =>{
                console.log(`clicked ${this.state.count}`)
            })
        }

       render(){
           console.log(this.props.name)
           return <WrapperComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                {...this.props}
            />
       }
    }

    return WithCounter
}

export default withCounter