import React, {useReducer} from 'react'

const intialState = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (currentState, aciton) => {
    switch(aciton.type){
        case 'increment':
            return {...currentState, firstCounter: currentState.firstCounter + aciton.value}
        case 'decrement':
            return {...currentState, firstCounter: currentState.firstCounter - aciton.value}
        case 'increment2':
            return {...currentState, secondCounter: currentState.secondCounter + aciton.value}
        case 'decrement2':
            return {...currentState, secondCounter: currentState.secondCounter - aciton.value}
        case 'reset':
            return intialState
        default:
            return currentState
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, intialState)

    return (
        <div>
            <div>count {count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value:1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value:1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'decrement', value:5})}>increment 5</button>
            <hr />

            <div>count {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment2', value:1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement2', value:1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'decrement2', value:5})}>increment 5</button>

            <hr />
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
