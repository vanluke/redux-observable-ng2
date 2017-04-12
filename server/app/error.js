const errorHandler = async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    throw err;
  }
};


export default function (app) {
  app.use(errorHandler);
}
