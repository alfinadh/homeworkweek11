const route = require('express').Router();
const controller = require('../../controllers/latihan/todo');

route.get('/', controller.listTodo)

module.exports = route;