export default function handler() {
  return {
    authenticate: (socket, data, callback) => {
      // TODO: add logic here
      return callback(null, true);
    },
    postAuthenticate: (socket, data) => {
      // TODO: add logic here
      socket.client.user = {
        name: data.username,
      };
    },
    disconnect: socket => console.info(`${socket.id} disconcted`),
  };
}
