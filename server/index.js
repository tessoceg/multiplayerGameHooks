const httpServer = require('http').createServer();

const io = require('socket.io')(httpServer);

io.on('connection', socket => {
  console.log('Player is connected!');
  socket.on('disconnect', () => {
  console.log('Player disconnected!')
  })
});

httpServer.listen(8080, () => {
  console.log('mf thang is running on port 8080');
})