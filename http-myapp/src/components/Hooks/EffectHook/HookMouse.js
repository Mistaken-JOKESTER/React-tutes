import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x , setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('mouse effect')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log('UserEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () =>{
            console.log('unmounting...')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

    return (
        <div>
            <h1>X-{x} and Y-{y}</h1>
        </div>
    )
}

export default HookMouse
