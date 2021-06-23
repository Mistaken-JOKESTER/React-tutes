import React, { PureComponent } from 'react'

export default class PureComponentDemo extends PureComponent {
    render() {
        console.log('Regular Component')
        // regular componets perom didUpadted method and do shallow comparison
        //to check if any update is done or not before rerender
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
