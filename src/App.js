import './App.css';
import Header from './Header';
import CreatureList from './CreatureList'
// import creaturesData from './creatures'
import React, { Component } from 'react';
import CreatureSearch from './CreatureSearch';
import request from 'superagent'

const CREATURES_API_URL = `https://backend-setup-lab06.herokuapp.com/data/creaturesData`;


class App extends Component {

  state = { creatures: [] }
  
  async componentDidMount() {
    const response = await request.get(CREATURES_API_URL)
    this.setState({ creatures: response.body })
  }

  handleSearch = async({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');
    const response = await request.get(CREATURES_API_URL)
    
    .filter(creature => {
      return creature.title.match(nameRegex);
    })

    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
      return 0;
    });

    this.setState({ creatures: response.body });
    };

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