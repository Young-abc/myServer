const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// 关键：禁用写入操作
router.render = (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  res.jsonp(res.locals.data);
};

server.use(middlewares);
server.use(router);

module.exports = server;
