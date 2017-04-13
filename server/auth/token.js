import fs from 'fs';
import jwt from 'koa-jwt';
import jsonwebtoken from 'jsonwebtoken';
import parse from 'co-body';
import { getPrivateKey } from './read-keys';

export async function loginRoute(ctx, next, data) {
  if (!ctx.url.match(/^\/login/)) {
    return await next();
  }
  const claims = await parse(ctx);
  const token = await jsonwebtoken.sign({
    ...claims,
    iat: Math.floor(Date.now() / 1000) - 30 },
    getPrivateKey(),
    { expiresIn: '1h',
  });

  ctx.response.status = 200;
  ctx.response.body = { token };
}

export const jwtConfig = jwt({
  secret: getPrivateKey(),
});
