import './App.css';
import Header from './Header';
import CreatureList from './CreatureList'
import creatures from './creatures'
import React, { Component } from 'react';
import CreatureSearch from './CreatureSearch';



class App extends Component {
  
  render() {
  return  ( 
    <div className="App">
        <div>
          <Header/>
          <CreatureSearch/>
          <main> <CreatureList creatureImageProp={creatures}/> </main>
        </div>
    </div>
  );
}
}

export default App