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
    socket.on('cmd: roll all dice', () => {
        console.log('TN: Received roll all dice command');
        let resultA = rollNumberDie();
        let resultB = rollNumberDie();
        let resultC = rollNumberDie();
        let resultX = rollColorDie();
        let resultY = rollColorDie();
        let resultZ = rollColorDie();
        let results = {resultA, resultB, resultC, resultX, resultY, resultZ};
        console.log('TN: Generated: ' + JSON.stringify(results));
        io.emit('ev: all dice rolled', results);
    });
});

// TODO move methods to new dice util
function rollNumberDie() {
    let number = rollDie();
    return number === 6 ? '?': number;
}

function rollColorDie() {
    let number = rollDie();
    switch (number) {
        case 1:
            return 'Red';
        case 2:
            return 'Orange';
        case 3:
            return 'Yellow';
        case 4:
            return 'Green';
        case 5:
            return 'Blue';
        case 6:
            return 'Black';
        default:
            throw new Error('Failed to convert number to color');
    }
}

function rollDie() {
    return Math.ceil(Math.random() * 6);
}

http.listen(3000, () => {
    console.log('listening on *:3000');
});