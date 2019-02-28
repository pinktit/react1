import React from 'react';
import styles from './Person.css';


const person = (props) => {

    // const rnd = Math.random();
    // if(rnd >0.7){
    //     throw new Error('Something wrong');
    // }
return(

<div className={styles.Person}>
<p onClick={props.click1}> i m {props.nam}. i am {props.agee} years</p>
<b>{props.children}</b>
<input type="text" onChange={props.changed} value={props.name} />
</div>
)
};

export default person;