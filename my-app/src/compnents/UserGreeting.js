import React, { Component } from 'react'


//conditional  Rendring
//if/else
//Element variables
//Ternary conditional Operator
//Short Circut Operator  //use if you want to render something or nothing
class userGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        //*************short circuit operator */
        return this.state.isLoggedIn && (<div>
            Welcome Ankit
            </div>)

        //****************Ternary Operator */
        // return this.state.isLoggedIn ?
        //     (<div>
        //         Welcome Ankit
        //     </div>) : (<div>
        //         Welcome Guest
        //     </div>)

        //***************element variable*/
        // let message
        // if(this.state.isLoggedIn)
        //     message = <div>Welcome Ankit</div>
        // else 
        //     message = <div>Welcome GUest</div>
        
        //********************Element Variable
        // let message
        // if(this.state.isLoggedIn)
        //     message = <div>Welcome Ankit</div>
        // else 
        //     message = <div>Welcome GUest</div>

        // return <div>{message}</div>

        //********************if else block
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Ankit</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>Welcome Ankit</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default userGreeting
