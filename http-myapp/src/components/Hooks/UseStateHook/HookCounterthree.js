import React, {useState} from 'react'

function HookCounterthree() {

    const [name, setname] = useState({firstName:'', lastName:''})

    return (
        <div>
            <form>
                <input 
                    type='text' 
                    onChange={ e => 
                        setname({...name, firstName:e.target.value}) 
                    } 
                    placeholder='First Name'
                     value={name.firstName} 
                />

                <input 
                    type='text' 
                    onChange={ e => 
                        setname({...name, lastName:e.target.value}) 
                    } 
                    placeholder='Last Name'
                     value={name.lastName} 
                />
                <h2>Your first name is : {name.firstName}</h2>
                <h2>Your last name is : {name.lastName}</h2>
            </form>
        </div>
    )
}

export default HookCounterthree
