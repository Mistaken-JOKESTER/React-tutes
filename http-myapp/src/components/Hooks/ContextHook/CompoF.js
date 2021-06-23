import React from 'react'
import { UserContext, ChannelContext } from "../../../App";

function CompoF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <div>usr context value is {user}</div>
                    }
                }
            </UserContext.Consumer>
            <ChannelContext.Consumer>
                {
                    channel => {
                        return <div>Channel context is {channel}</div>
                    }
                }
            </ChannelContext.Consumer>
            <h1>COmponent F</h1>
        </div>
    )
}

export default CompoF
