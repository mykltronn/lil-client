import React, { Component } from 'react';
// import moment from 'moment';

// ASSETS
import { subscribeToUser } from '../api/api'; // import subscription function
// import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      socketData: null,
      socketOpen: false
    }

    subscribeToUser( (err, socketData) => {console.log(socketData); this.setState({ socketData, socketOpen: true })}, 1000)
  }

  render() {
    // let time = this.state.socketOpen ? moment(this.state.timestamp).format('h:mm:ss') : this.state.timestamp;
    console.log("Component renders!!")
    console.log(this.state.socketData)
    let socketData = this.state.socketData;

    let name = socketData ? socketData.payload : null;

    return (
      <div className='App'>
        <h1>This page is running on a totally distinct server from Op36</h1>
        <h5>It's listening to a Node Server and subscribing to a socket opened on that server. That socket taps in to the postgresql DB generated in Rails by the Op36 server.</h5>
        <h5>Trigger functions are set up on the DB to listen for insertions</h5>
        <p>User added to Op36: <br/> {name} </p>
      </div>
    );
  }
}
