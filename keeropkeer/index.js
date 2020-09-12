var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');

app.use('/resources', express.static(path.join(__dirname, 'resources')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('cmd: roll dice', () => {
        console.log('TN: Received roll dice command');
        let result = Math.ceil(Math.random() * 6);
        console.log('TN: Generated: ' + result);
        io.emit('ev: dice rolled', result);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});