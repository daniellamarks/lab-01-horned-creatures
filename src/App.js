import './App.css';
import Header from './Header';
import CreatureList from './CreatureList'
import images from './creatures'
import React, { Component } from 'react';



class App extends Component {
  
  render() {
  return  ( 
    <div className="App">
        <div>
          <Header/>
          <main> <CreatureList images={images}/> </main>
        </div>
    </div>
  );
}
}

export default App