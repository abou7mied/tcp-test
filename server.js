/**
 * Created by abou7mied on 2/2/17.
 */

var debug = require("debug")("server");
var http = require('http');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 2222;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello!");
}).listen(server_port, server_ip_address, function() {
  debug("Server started!");
});