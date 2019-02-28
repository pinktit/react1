import React from 'react';
import P1 from './Person/Person';

const persons = (props) => props.persons.map((aperson, index) => {
        return <P1
        click1={() =>props.clicked(index)}
        nam={aperson.name}
        agee={aperson.age} 
        key={aperson.id}
        changed={(event) => props.changed(event, aperson.id)}/>
});

export default persons;