import React from 'react'

function Count({type, value}) {
    console.log('count', type)
    return (
        <div>
            <h2>{type}</h2> : {value}
        </div>
    )
}

export default React.memo(Count)
