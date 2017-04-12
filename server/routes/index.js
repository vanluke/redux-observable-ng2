import routes from './app-router';

routes.get('/auth', async (ctx) => {
  ctx.response.body = 'Hello Word';
  ctx.response.status = 201;
});

export default routes;