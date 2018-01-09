import React, { Component } from 'react';
import '../index.css';

import StatContainer from './statContainer/StatContainer';
import Rank from './Rank';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatContainer />
        <Rank />
      </div>
    );
  }
}

export default App;
