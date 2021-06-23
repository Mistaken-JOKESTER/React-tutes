import React from 'react'

function Title() {
    console.log('title')
    return (
        <div>
            <h1>Use custome Hook</h1>
        </div>
    )
}

export default React.memo(Title)
