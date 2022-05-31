require('dotenv').config();

module.exports = {
  env: {
    PORT: process.env.PORT,
    APP_ZONE: process.env.APP_ZONE,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};
