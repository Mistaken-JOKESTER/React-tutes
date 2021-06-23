import React from 'react'

const heading = {
    fontSize:'100px',
    color:'blue'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>I am form inline but still i can use css classes of other components</h1>
            <h1 style={heading}>Inline</h1>            
        </div>
    )
}

export default Inline
