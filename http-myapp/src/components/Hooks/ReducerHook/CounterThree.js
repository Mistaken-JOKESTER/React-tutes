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

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, intialState)
    const [count2, dispatch2] = useReducer(reducer, intialState)

    return (
        <div>
            <div>count {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <hr />
            <div>count2 {count2}</div>
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree
