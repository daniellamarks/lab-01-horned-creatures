import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  
  render() {
    return (
      <div>
        
        <form className="CreatureSearch">
            <input type="text" id="searchBox" name="searchBox"></input>
            <select>
                <option value="">Sort...</option>
                <option value="name">By name</option>
                <option value="# of horns">By Lives</option>
            </select>
            <button>Search</button>
        </form>

      </div>
    );
  }

}