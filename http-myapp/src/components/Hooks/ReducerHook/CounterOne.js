import React, {useReducer} from 'react'

const intialState = 0
const reducer = (currentState, aciton) => {
    switch(aciton){
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return intialState
        default:
            return currentState
    }
}

function CounterOne() {

    const [count, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            <div>count-{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
