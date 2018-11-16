import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  
  state = {
persons : [
  {name: 'Max', age: 28}
]
  }

 
  render() {
   return (
      <div className = "App">
        <h1>Hi, I'am Tiwolf</h1>
          <button onClick = {() => this.switchNameHandler("!!!!!!!!!!!!!!!!")}>Switch name</button>
          <Person 
            name = "Tiwolf" 
            age = "27"/>
          <Person             
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}
            click = {this.switchNameHandler.bind(this, "&&&&&&&&&&&&&&&&")}
            changed = {this.nameChangedHandler}/>          
      </div>
    );
   // return React.createElement('div', null, React.createElement('h1', {className: "App"}, 'Hi, I\'am Tivolf'))
  }   
  
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons : [
          {name: newName, age: 281}
        ]
    });
      }

      nameChangedHandler = (event) => {
        this.setState(
          {
            persons : [
              {name: event.target.value, age: 281}
            ]
        });
          }
}

export default App;

