var http = require('http');
debugger;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  debugger;
  res.end('Hello World\n');
}).listen(1337, '178.62.215.128');
console.log('Server running at http://178.62.215.128:1337/');