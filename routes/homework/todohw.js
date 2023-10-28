const route = require('express').Router();
const controllers = require('/controllers/homework/todo');

route.get('/', controllers.listAllTodo);

route.get('/todo/:id', controllers.getTodoById);

route.post('/', controllers.createTodo);

route.delete('/todo/:id', controllers.deleteTodo);

module.exports = route;