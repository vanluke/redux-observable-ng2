var socket = io('http://localhost:1337');
socket.on('connect', function(){
  console.log('connect');
  socket.emit('authentication', {username: "John", password: "secret"});
  socket.on('authenticated', function() {
    // use the socket as usual 
  });
});