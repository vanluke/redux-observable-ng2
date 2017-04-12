import routes from './app-router';

routes.get('/hello', async (ctx) => {
  ctx.response.body = 'Hello Word';
  ctx.response.status = 201;
});

export default routes;