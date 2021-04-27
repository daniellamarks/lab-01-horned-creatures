import './App.css';
import Header from './Header';
import CreatureList from './CreatureList'
import creaturesData from './creatures'
import React, { Component } from 'react';
import CreatureSearch from './CreatureSearch';



class App extends Component {

  state = {
    creatures: creaturesData
  }
  
  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creaturesData

    .filter(creature => {
      return creature.title.match(nameRegex);
    })

    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
      return 0;
    });

    this.setState({ creatures: searchedData });

  }

  render() {

    const { creatures } = this.state;

  return  ( 
    <div className="App">
        <div>
          <Header/>
          <CreatureSearch onSearch={this.handleSearch}/>
          <main> <CreatureList creatureImageProp={creatures}/> </main>
        </div>
    </div>
  );
}
}

export default App