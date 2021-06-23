import React from 'react'
//rendered in pure componets as recat.memo modifiy simple function to behave like pure component


function MemoComp({name}) {
    console.log('Memo componet is rendreding')
    return (
        <div>
            Memo Component
            {name}
        </div>
    )
}

export default React.memo(MemoComp)