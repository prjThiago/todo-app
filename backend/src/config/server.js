const port = 3003,
    bodyParser = require('body-parser'),
    express = require('express'),
    server = express(),
    allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})

module.exports = server;