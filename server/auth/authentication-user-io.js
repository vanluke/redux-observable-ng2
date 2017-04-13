// import jsonwebtoken from 'jsonwebtoken';
// import { getPrivateKey } from './read-keys';

// export default function handler() {
//   return {
//     authenticate: async (socket, data, callback) => {
//       const verify = await jsonwebtoken.verify(data.token, getPrivateKey());
//       console.log(verify, 'log');
//       return callback(null, true);
//     },
//     postAuthenticate: (socket, data) => {
//       // TODO: add logic here
//       socket.client.user = {
//         token: data.token,
//       };
//     },
//     disconnect: socket => console.info(`${socket.id} disconcted`),
//   };
// }
