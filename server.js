var http = require('http');
var app = require('./main');
var server = http.createServer(app);

server.listen(process.env.PORT || 3500 ,function() {
    console.log("Server is success!");
});