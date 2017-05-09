import jwt from 'koa-jwt';
import jsonwebtoken from 'jsonwebtoken';
import parse from 'co-body';
import { getPrivateKey } from './read-keys';

export const createToken = async claims =>
  await jsonwebtoken.sign({
    name: claims.username,
    iat: Math.floor(Date.now() / 1000) - 30 },
    getPrivateKey(),
    { expiresIn: '1d',
    });

const constructResponse = (ctx, token) => {
  ctx.response.status = 200;
  ctx.response.body = { token };
  return ctx;
};

export async function loginRoute(ctx, next) {
  if (!ctx.url.match(/^\/login/)) {
    return await next();
  }
  const claims = await parse.json(ctx);
  const token = await createToken(claims);
  return constructResponse(ctx, token);
}

export const jwtConfig = jwt({
  secret: getPrivateKey(),
});
