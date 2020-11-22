'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var cookie = require('cookies');

var port = 3000;
app.set('port', (process.env.PORT || port));

app.use(express.static(path.join(__dirname, 'public/')));
app.use('/vue', express.static(path.join(__dirname, '/node_modules/vue/dist/')));

app.get('/', function (req, res)
{
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

function Data()
{
    this.users = {};
    this.numberOfUsers = 0;
}

var data = new Data();

io.on("connection", (socket) =>
{
    // console.log(client.request.headers.cookie);

    var cookief = socket.handshake.headers.cookie;
    // var cookies = cookie.parse(socket.handshake.headers.cookie);
    console.log(cookief);

    data.numberOfUsers = socket.client.conn.server.clientsCount;
    socket.emit("welcome", socket.id);

    socket.on("buttonPressed", (message) =>
    {
        // console.log("The user has sent this message: " + message);
    });
});

var server = http.listen(app.get('port'), function ()
{
    console.log('Server listening on port ' + app.get('port'));
});