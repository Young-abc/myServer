const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser); // 支持 POST
server.use(router);

module.exports = server;
