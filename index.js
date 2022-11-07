const express = require('express');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
const port = process.env.PORT || 3003;
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // ethereum.on('connect');

  
});

app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html');
  });

  console.log(__dirname)

app.use(express.static(path.join(__dirname, '/public')));

// io.on('connection', (socket) => {
//   socket.once('chat message trigger', msg => {
//     io.emit('chat message receiver', msg);
//   });
// });

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
