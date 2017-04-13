import ioauth from 'socketio-auth';
import authUserConfig from './authentication-user-io';

export default function (io, conf = authUserConfig()) {
  const {
    authenticate,
    postAuthenticate,
    disconnect,
  } = conf;
  return ioauth(io, {
    authenticate,
    postAuthenticate,
    disconnect,
    timeout: 1000,
  });
}
