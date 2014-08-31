
// Read file
var fs = require('fs'); // load fs plugin



// HTTP listener
var http = require('http'); // load http plugin
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World, is running\n');
  res.write("World is done.");
  var callback = function(err,contents){
    res.write(contents);
    res.end();
  }
  fs.readFile("index.html",callback);
}).listen(8080);
console.log('Server running at http://localhost:8080/');

// TCP listener
var net = require('net'); // load net plugin
var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});
server.listen(1338, '127.0.0.1');
