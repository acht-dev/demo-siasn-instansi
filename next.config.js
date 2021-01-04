const { default: next } = require("next");
require("dotenv").config();

module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // API_ENDPOINT: process.env.NEXT_PUBLIC_API_GATEAWAY_ENDPOINT,
  },
  env: {
    URL_IAM: process.env.URL_IAM,
    REALM_IAM: process.env.REALM_IAM,
    CLIENT_ID: process.env.CLIENT_ID,
    MY_SECRET: process.env.MY_SECRET,
    API_GATEAWAY_ENDPOINT: process.env.API_GATEAWAY_ENDPOINT,
    COBA: process.env.COBA,
  },
};
