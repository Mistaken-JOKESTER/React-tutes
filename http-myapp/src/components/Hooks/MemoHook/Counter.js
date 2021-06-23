import React, {useState, useMemo} from 'react'

function Counter() {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const increment1 = () =>{
        setCounter1(prevState => prevState + 1)
    }

    const increment2 = () =>{
        setCounter2(prevState => prevState + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0
        while(i < 2000000000) i++
        return counter1 % 2 === 0
    }, [counter1])
 
    return (
        <div>
            <div>
                <button onClick={increment1} >Increment first counter {counter1} </button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={increment2} >Increment second counter {counter2} </button>
            </div>
        </div>
    )
}

export default Counter
