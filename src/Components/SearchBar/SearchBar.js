import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.target.setSelectionRange(0, event.target.value.length);
      }
    
      handleKeyPress(event) {
        if (event.key === 'Enter' && event.target.value) {
          this.search();
        }
      }

    handleTermChange(event) {
this.setState({term: event.target.value});
    }

    search() {
        this.props.onSearch(this.state.term);
            }

    render() {
        return (
        <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" 
        onChange={this.handleTermChange} 
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}/>
  <button className="SearchButton" onClick={this.search}>SEARCH</button>
</div>
        );
    }
}

export default SearchBar;