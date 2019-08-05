let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    io.emit('chat message', '>>>>>>>>>>>>>>>> you are connected. good to go <<<<<<<<<<<<<<<<<<<<<<');
    socket.on('chat message', function(msg){
        console.log('Message : '+msg);
        socket.broadcast.emit('chat message', msg);
      });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});