// Load the express module.
var express = require('express'),
    app = express.createServer();

// Load to requests for / with 'Hello World'.
app.get('/', function(req, res) {
   res.send('Hello World');
});

// Listen on port 80 (like a true webserver).
app.listen(80);
console.log('Express server started successfully.');