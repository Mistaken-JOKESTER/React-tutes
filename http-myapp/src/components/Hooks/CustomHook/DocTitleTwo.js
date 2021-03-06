import React, {useState, useEffect} from 'react'
import useDocumentTitle from '../../../hooks/useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount +1)}>Increment {count}</button>        
        </div>
    )
}

export default DocTitleTwo
