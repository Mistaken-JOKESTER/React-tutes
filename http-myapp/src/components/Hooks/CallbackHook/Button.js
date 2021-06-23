import React from 'react'

function Button({handler, children}) {
    console.log('button', children)
    return (
        <div>
            <button onClick={handler}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
