import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';
import app from './app';
import config from '../config/app-config';
import error from './error';
import listen from './listen';
import routes from '../routes';
import attach, { io } from './io-app';
import tokenIO from '../auth/socket';

const version = config.get('version');
const endpoint = `/api/v${version}`;

attach(app);

tokenIO(app._io);

app.use(json());
app.use(cors());
app.use(mount(endpoint, routes.middleware()));
error(app);

listen(app);
