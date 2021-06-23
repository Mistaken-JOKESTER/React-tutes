import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Ankit', 'Jindal', 'Amit', 'Mahesh']
    const persons = [
        {
            id: 1,
            name: "Ankit",
            age:22,
            skill: "everything"
        },
        {
            id: 2,
            name: "Jindal",
            age:20,
            skill: "Marketing"
        },{
            id: 3,
            name: "Mahesh",
            age:22,
            skill: "Sleeping"
        }
    ]

    //use index as key if
    // list is not filered
    //list is static and never change
    //list does not have unique id
    const nameList = names.map( (name, index) =><h1 key={index}>{index}. {name}</h1>)
    
    const personList = persons.map(person =><Person key={person.id} person={person}></Person>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
