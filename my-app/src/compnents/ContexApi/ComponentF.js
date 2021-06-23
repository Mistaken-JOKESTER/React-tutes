import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <h1>
                <UserConsumer>
                    {
                        (username) =>{
                            return <div>Hello {username}</div>
                        }
                        
                    }
                </UserConsumer>
            </h1>
        )
    }
}

export default ComponentF
