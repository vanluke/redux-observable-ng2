import config from '../config/app-config';

const host = config.get('host');
const port = config.get('port');
const version = config.get('version');

export default function (app) {
  app.listen(port, host, () => {
    console.info(`App is listening. Endpoint http://${host}:${port}/api/v${version}`);
  });
}
