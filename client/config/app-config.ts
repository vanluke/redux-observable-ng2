const env = process.env.NODE_ENV || 'development';

export const config = {
  conf: require(`./config.${env}.json`),
  get(key) {
    return this.conf[key];
  },
};
