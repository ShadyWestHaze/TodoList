import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
