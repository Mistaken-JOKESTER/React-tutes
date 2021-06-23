import React from 'react'

export default function Child(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Canedy")}>Greet parent</button>
        </div>
    )
}
