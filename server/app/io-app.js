import IO from 'koa-socket';

const io = new IO({
  namespace: 'auth',
});

export default function attach(app) {
  return io.attach(app);
}

export { io };

