import React from 'react'

const Greet= ({name, children}) => {
    return (
        <div>
            <h1 className="hello">Hello {name}</h1>
            {children}
        </div>
    )
}


export default Greet