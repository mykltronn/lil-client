import openSocket from 'socket.io-client';

/**
 * Create a function that can be called to emit the subscribeToTimer event to 
 * the server and feed back the results of the timer event to the consuming code.
 */

const socket = openSocket('http://localhost:8000'); // construct socket using socket.io's baked-in export method


export function subscribeToUser(cb) {
  console.log('Subscribe to "addUser" socket')
  // vv subscribe to 'user' event before emitting subscribeToTimer event to avoid a race between sever emitting events and client showing interest in those events, causing events to go missing
  socket.on('addUser', (content) => cb(null, content));
  socket.emit('subscribeToUser')
}

export function unsubscribeFromUser(cb) {
  console.log('Client unsubscribes from "addUser"')
  socket.removeAllListener('addUser');
}

// see how this function is imported and utilized in App.js