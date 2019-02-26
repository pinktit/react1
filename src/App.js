import React, { Component } from 'react';
import P1 from './Person/Person';

import './App.css';
import person from './Person/Person';

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
  

  // switchHandler = (newName1) =>{
  //  // console.log('done');
  //  // dont do this: this.state.persons[0].name= 'rudy';
  //  this.setState({
  //   persons:[
  //     {name:'rudy', age:111},
  //     {name:'row', age:331},
  //     {name:newName1, age:222}

  //   ] 

  //  })
  // }

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
    const btnstyle={

      backgroundColor:'#00f',
      color:'#fff',
      border:'1px solid #3333ff',
      padding: '8px'
    }
    let persons = null;
    // let classes = ['red', 'bold'].join(' ');
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((aperson, index) => {
            return <P1
            click1={() =>this.deletePersonHandler(index)}
            nam={aperson.name}
            agee={aperson.age} 
            key={aperson.id}
            changed={(event) => this.namechanger(event, aperson.id)}/>
          })}
        {/* <P1 
        nam={this.state.persons[0].name} 
        agee={this.state.persons[0].age}
        changed={this.namechanger}/>
        <P1 
        nam={this.state.persons[1].name} 
        agee={this.state.persons[1].age}
        click1={this.switchHandler}>jack bold test</P1>
        <P1 nam={this.state.persons[2].name} agee={this.state.persons[2].age}/> */}
        </div>
      );
      btnstyle.backgroundColor='#f00';
    }

    const classes=[];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    
    return (
      <div className="App">
    <h1>nd1</h1>
    <p className={classes.join(' ')}>This is working</p>
    {/* <button onClick={this.switchHandler.bind(this, 'cwj')}>switch name </button> */}
    {/* <button style={btnstyle} onClick={() => this.switchHandler('chwj')}>switch name </button> */}
    <button style={btnstyle} onClick={this.toggleP1Handler}>switch name </button>

{persons}
          </div>
        );
    // return React.createElement('div', {className:'app'}, React.createElement('h1', null, 'working'));
      }
}

export default App;
