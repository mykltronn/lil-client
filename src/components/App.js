import React, { Component } from 'react';
import moment from 'moment';

// ASSETS
import { subscribeToTimer } from '../api/api'; // import subscription function
// import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timestamp: 'not currently available.',
      socketOpen: false
    }

    subscribeToTimer( (err, timestamp) => this.setState({ timestamp, socketOpen: true }), 1000)
  }

  // state = {
  //   timestamp: 'time not yet available yet'
  // }

  render() {
    let time = this.state.socketOpen ? moment(this.state.timestamp).format('h:mm:ss') : this.state.timestamp;
    console.log(time)
    return (
      <div className='App'>
          <h1>This is a wicked socket example</h1>
          <p> The current time is {time} </p>
      </div>
    );
  }
}
