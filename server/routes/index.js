import routes from './app-router';
// import token from '../auth';

routes.get('/hello', async (ctx) => {
  ctx.response.body = 'Hello Word';
  ctx.response.status = 201;
});

// routes.post('/get-token/:id', token);

export default routes;