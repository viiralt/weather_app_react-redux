import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state = { term: ''}; 
  
  onInputChange = event => {
    /* console.log(event.target.value); */
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault(); 

    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' }); // clear input field
  }
    
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five-day weather forecast in your selected cities'
          className='form-control'
          value={this.state.term} // cretating a controlled comp
          // on input, call onInputChange
          onChange={this.onInputChange}/> 
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchWeather }, dispatch); 
}

// null goes first, because the first arg is reserved for state, we don't need it atm tho 
export default connect(null, mapDispatchToProps)(SearchBar);


