import React, { Component} from 'react';
import './App.css';

import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
persons : [
  {id: '1', name: 'Max', age: 28},
  {id: '2', name: 'Jon', age: 30},
  {id: '3', name: 'Carry', age: 25},
],
 showPersons: false,
 symbols: ''
  }

 
  render() {
    
    let persons = null;
    let symbols = (
      <div>
         {[...this.state.symbols].map((symbol, index) => {
            return <CharComponent 
            char={symbol}
            key={index}
            click = {() => this.deleteCharHandler(index)}/>
          })}
      </div>
    );


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
      <input type="text" 
      onChange = {this.textChangedHandler}
      value={this.state.symbols} />
      <p>{this.state.symbols.length}</p>
      <ValidationComponent 
        numberOfSymbols={this.state.symbols.length}/>
          {symbols}
          <button onClick = {this.togglePersonsHandler}>Show/Hide</button>    
          {persons}               
      </div>
    );
   // return React.createElement('div', null, React.createElement('h1', {className: "App"}, 'Hi, I\'am Tivolf'))
  }   

  textChangedHandler = (event) => {
    this.setState({symbols: event.target.value});    
  }

  togglePersonsHandler = () => {
    this.setState({showPersons : !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  deleteCharHandler = (index) => {
    //let symbols = this.state.symbols;
    let symbols = [...this.state.symbols];
    symbols.splice(index, 1);
    this.setState({
      symbols: symbols.join('')
    });
  }


      nameChangedHandler = (event, id) => {

       /* const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });*/

        const person = {...this.state.persons.filter(p => {
          return p.id === id;
        })};

       /* const person = {
          ...this.state.persons[personIndex]
        };  */
        
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[id] = person;


        //const person = Object.assign({}, this.state.persons[personIndex]);
        this.setState(
          {
            persons : persons
        });
      }
}

export default App;

