import {useState} from 'react'

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(prevCount => initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
