import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../index.css';

import App from './App';
import NotFound from './NotFound';
import SearchBar from './SearchBar'

class Main extends Component {
  render() {
    return (
        <div>
            <SearchBar />
            <Switch>
                <Route path="/notfound" component={NotFound}/>
                <Route path="/"  component={App}/>
            </Switch>
        </div>
    );
  }
}

export default Main;
