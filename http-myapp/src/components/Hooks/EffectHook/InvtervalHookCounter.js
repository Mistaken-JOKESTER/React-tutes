import React, {useState, useEffect} from 'react'

function InvtervalHookCounter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('new Tick')
        const intverval = setInterval(tick, 1000)
        return () => {
            clearInterval(intverval)
        }
    }, [])

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            Hook count is {count}
        </div>
    )
}

export default InvtervalHookCounter
