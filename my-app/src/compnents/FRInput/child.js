import React from 'react'

// function Child() {
//     return (
//         <div>
//             <input type='text' />
//         </div>
//     )
// }

const Child = React.forwardRef((props, ref) =>{
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default Child