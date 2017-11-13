import openSocket from 'socket.io-client';

/**
 * Create a function that can be called to emit the subscribeToBookingsChannel event to 
 * the server and feed back the results of the timer event to the consuming code.
 */

export function subscribeToBookingsChannel(cb) {

  const server = 'https://coworks-booking-service.herokuapp.com/';
  const socket = openSocket(server);
  // const server = 'https://git.heroku.com/coworks-booking-service.git'
  // const socket = openSocket('git.heroku.com/', { path: '/coworks-booking-service.git'});
  
  socket.on('connected', (data) => {
    console.log('Subscribe to "modifyBooking" socket');
    socket.on('modifyBooking', (content) => cb(null, content));
  })
}

// export function unsubToBookingsChannel(cb) {
//   console.log('Client unsubscribes from "modifyBooking"')
//   socket.removeAllListeners('modifyBooking');
// }

// see how this function is imported and utilized in App.js