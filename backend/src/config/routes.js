const express = require('express');


module.exports = (server) => {

    const router = express.Router(),
        todoService = require('../api/todo/todoService');

    server.use('/api', router);
    
    todoService.register(router, '/todos');
}