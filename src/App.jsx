import React, { Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  
  state = {
persons : [
  {id: '1', name: 'Max', age: 28},
  {id: '2', name: 'Jon', age: 30},
  {id: '3', name: 'Carry', age: 25},
],
 showPersons: false
  }

 
  render() {
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>  
      );

    }
   return (
      <div className = "App">
        <h1>Hi, I'am Tiwolf</h1>
          <button onClick = {this.togglePersonsHandler}>Switch name</button>    
          {persons}               
      </div>
    );
   // return React.createElement('div', null, React.createElement('h1', {className: "App"}, 'Hi, I\'am Tivolf'))
  }   

  togglePersonsHandler = () => {
    this.setState({showPersons : !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


      nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });

        const person = {
          ...this.state.persons[personIndex]
        };  
        
        person.name = event.target.value;


        //const person = Object.assign({}, this.state.persons[personIndex]);
        this.setState(
          {
            persons : [
              {name: event.target.value}
            ]
        });
      }
}

export default App;

