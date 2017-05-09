import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';
import app from './app';
import config from '../config/app-config';
import error from './error';
import listen from './listen';
import routes from '../routes';
import secure from '../auth';
import attach from './io-app';

const version = config.get('version');
const endpoint = `/api/v${version}`;

attach(app);

app.use(json());
app.use(cors());
secure(app);
app.use(mount(endpoint, routes.middleware()));
error(app);

listen(app);
