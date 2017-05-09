var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  socket.on('join lobby', function(data){
    console.log(`player joined: ${data.player.username}`);

    socket.join('lobby', function() {
      io.in('lobby').emit('player joined', data.player);
    });
  });

  socket.on('leave lobby', function(data){
    console.log(`player leaving: ${data.player.username}`);

    socket.leave('lobby', function() {
      io.in('lobby').emit('player left', data);
    });
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});