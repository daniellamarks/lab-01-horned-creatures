import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
    state = {
        nameFilter: '',
        sortField: ''
    }
  
    handleNameFilter = ({ target }) => {
        this.setState({nameFilter: target.value})
    }

    handleSortField = ({ target }) => {
        this.setSate({ sortField: target.value })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state)
    }
   

  render() {

    const { nameFilter, sortField } = this.state;
    //const nameFilter = this.state.nameFilter
    //const sortField = this.state.sortField

    return (
      <div>
        
        <form className="CreatureSearch">
            <input 
                value={nameFilter} 
                name="nameFilter"
                onChange={this.handleNameFilter}
                >
            </input>
            <select
            name="sortField"
            value={sortField}
            onChange={this.handleSortField}
            >
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