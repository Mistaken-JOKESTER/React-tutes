import React from 'react'

function Rows() {
    const items = [{
        id:1,
        name:'Ankit',
        age:22
    },{
        id:1,
        name:'Arsh',
        age:21  
    },{
        id:1,
        name:'Jindal',
        age:20
    }]

    return (
        <React.Fragment>
            {items.map(item => (
            <React.Fragment key={item.id}>
                <tr>
                    <td>Name</td><td>{item.name}</td>
                    <td>Age</td><td>{item.age}</td>
                </tr>
            </React.Fragment>))}
        </React.Fragment>
    )
}

export default Rows
