import fs from 'fs';

const storage = {
  memo: {},
  set(key, data) {
    this.memo[key] = data;
  },
  get(key) {
    return this.memo[key];
  },
};

export const getPrivateKey = () => {
  const key = storage.get('private');
  if (key) {
    return key;
  }
  const privateKey = fs.readFileSync('./server/auth/keys/ng2-pl.rsa');
  storage.set('private', privateKey);
  return storage.get('private');
};

export const getPublicKey = () => {
  const key = storage.get('public');
  if (key) {
    return key;
  }
  const publicKey = fs.readFileSync('./server/auth/keys/ng2-pl.rsa.pub');
  storage.set('public', publicKey);
  return storage.get('public');
};
