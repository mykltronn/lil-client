import openSocket from 'socket.io-client';

/**
 * Create a function that can be called to emit the subscribeToTimer event to 
 * the server and feed back the results of the timer event to the consuming code.
 */

const socket = openSocket('http://localhost:8000'); // construct socket using socket.io's baked-in export method


export function subscribeToTimer(interval, cb) {
  // vv subscribe to 'timer' event before emitting subscribeToTimer event to avoid a race between sever emitting events and client showing interest in those events, causing events to go missing
  socket.on('timer', (timestamp) => cb(null, timestamp));
  socket.emit('subscribeToTimer', interval)
}

// see how this function is imported and utilized in App.js