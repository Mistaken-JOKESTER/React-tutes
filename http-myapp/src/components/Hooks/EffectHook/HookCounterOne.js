import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() =>{
        console.log('effectHook -- updating')
        document.title = `You clicked ${count} Times`
    },[count])
    // add elements to array if you want to monitor it

    return (
        <div>
            <button onClick={() => setCount(prevCount =>prevCount+1 )}>Click {count} times</button>
            <input value={name} placeholder='Name' type='text' onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default HookCounterOne
