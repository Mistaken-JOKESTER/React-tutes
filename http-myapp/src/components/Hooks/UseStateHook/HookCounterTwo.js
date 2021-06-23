import React, {useState} from 'react'

function HookCounterTwo() {
    
    const [count, setCount] = useState(0)
    
    
    const incrementFive = () =>{
        for (let i = 0; i < 5; i++) {
            //this is wrong way of doing
            // setCount(count + 1)
            setCount((prevCount) => {
                return prevCount + 1
            })
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevCount =>prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(prevCount =>prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount =>prevCount - prevCount)}>Reset</button>
            <button onClick={incrementFive}>+5</button>
        </div>
    )
}

export default HookCounterTwo
