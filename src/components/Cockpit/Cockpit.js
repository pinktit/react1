import React from 'react';
import styles from './Cockpit.css'



const cockpit = (props) =>{

    const classes=[];
    let btnClass= '';
    if(props.showPerson){
        btnClass = styles.Red;
    }
   
    if(props.persons.length <=2){
      classes.push(styles.red);
    }
    if(props.persons.length <=1){
      classes.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit}>
        <h1>nd1</h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* <button onClick={this.switchHandler.bind(this, 'cwj')}>switch name </button> */}
        {/* <button style={btnstyle} onClick={() => this.switchHandler('chwj')}>switch name </button> */}
        <button 
        className={btnClass}
        onClick={props.clicked}>switch name </button>
        </div>
    );
};

export default cockpit;