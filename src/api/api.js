import openSocket from 'socket.io-client';

/**
 * Create a function that can be called to emit the subscribeToTimer event to 
 * the server and feed back the results of the timer event to the consuming code.
 */

const socket = openSocket('http://localhost:8000'); // construct socket using socket.io's baked-in export method


export function subscribeToUser(cb) {
  
  socket.on('connected', (data) => {
    console.log('Subscribe to "addUser" socket')
    socket.emit('ready for data', {});

    socket.on('addUser', (content) => cb(null, content));
  })
}

export function unsubscribeFromUser(cb) {
  console.log('Client unsubscribes from "addUser"')
  socket.removeAllListeners('addUser');
}

// see how this function is imported and utilized in App.js