import React, { Component } from 'react';

// ASSETS
import { subscribeToTimer } from '../api/api';
import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    subscribeToTimer( (err, timestamp) => this.setState({ timestamp }))
  }

  state = {
    timestamp: 'no timestamp yet'
  }

  render() {
    return (
      <div className='App'>
          <h1>This is a wicked socket example</h1>
          <p> The current time is {this.state.timestamp} </p>
      </div>
    );
  }
}
