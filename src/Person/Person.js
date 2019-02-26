import React from 'react';
import './Person.css';


const person = (props) => {
return(
<div className="Person">
<p onClick={props.click1}> i m {props.nam}. i am {props.agee} years</p>
<b>{props.children}</b>
<input type="text" onChange={props.changed} value={props.name} />
</div>
)
};

export default person;