import React, { Component } from 'react';
// import moment from 'moment';

// ASSETS
import { subscribeToBookingsChannel, unsubToBookingsChannel } from '../api/api'; // import subscription function
// import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      socketData: null,
      socketOpen: false
    }
  }

  componentDidMount() {
    if(!this.state.socketOpen) {
      subscribeToBookingsChannel((err, socketData) => { this.setState({ socketData, socketOpen: true }) })
    }
  }
   
  // componentWillUnmount() {
  //   unsubscribeFromUser();
  // }

  render() {
    console.log("Component renders!!")
    let socketPayload = this.state.socketData ? JSON.parse(this.state.socketData.payload) : null;
    let name = socketPayload ? socketPayload.name : null;

    return (
      <div className='App'>
        <p>Data added to 'bookings' table: <br/> {name} </p>
      </div>
    );
  }
}
