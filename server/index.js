let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(8080, function () {
    console.log('Server is now running on port 8080')
});

io.on('connection', function(socket) {
    console.log('Player Connected!');
    socket.on('disconnect', function() {
        console.log('Player Disconnected')
    });
});