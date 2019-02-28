import React, { Component } from 'react';


import './App.css';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons:[
      { id: 'n1', name:'rudd', age:111},
      { id: 'n2', name:'row', age:331},
      { id: 'n3', name:'xw', age:441}
    ],
    otherState: 'some other value',
    showPersons:false
  }
  
  namechanger = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person={
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]= person;
    this.setState({persons: persons});
  }

  toggleP1Handler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    // const tempp= this.state.persons;
    const tempp= [...this.state.persons];
    tempp.splice(personIndex, 1);
    this.setState({persons: tempp});
  }

  render() {

    let persons = null;
    let btnClass ='';
    // let classes = ['red', 'bold'].join(' ');
    if(this.state.showPersons){
      persons=
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.namechanger}
          />
      
    }

    return (
      <div className={styles.App}>
    <Cockpit 
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.toggleP1Handler}
    />
    {persons}
          </div>
        );
    // return React.createElement('div', {className:'app'}, React.createElement('h1', null, 'working'));
      }
}

export default App;
