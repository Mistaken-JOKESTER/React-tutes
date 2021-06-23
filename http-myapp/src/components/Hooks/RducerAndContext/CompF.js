import React, {useContext} from 'react'
import { CountContext } from '../../../App'

function CompF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <div>
                CompF {countContext.countState}
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CompF