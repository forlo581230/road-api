// $env:DEBUG="*"; node index.js
var debug = require('debug')('myapp:index-client');
var app = require('./app');
var http = require('http');




var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('listening', onListening);
// server.on('error', onError);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}


server.listen(3000);