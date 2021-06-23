import React, {useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function Parent() {

    const [age, setAge] = useState(23)
    const [salary, setSalary] = useState(25000)

    const incrementAge = useCallback(() =>{
        setAge(prevState => prevState + 1)
    },[age])
    const incrementSalary = useCallback(() =>{
        setSalary(prevState => prevState + 1000)
    },[salary])

    console.log('parent')
    return (
        
        <div>
            <Title />
            <Count type='age' value={age} />
            <Button handler={incrementAge}>Increment Age</Button>
            <Count type='salary' value={salary} />
            <Button handler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default Parent
