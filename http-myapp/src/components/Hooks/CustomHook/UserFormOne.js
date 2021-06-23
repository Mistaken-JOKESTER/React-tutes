import React, {useState} from 'react'
import useInput from '../../../hooks/useInput'

function UserFormOne() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input placeholder='first name' name='first_name' type='text' {...bindFirstName}/>
                <input placeholder='last name' name='last_name' type='text' {...bindLastName}/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserFormOne
