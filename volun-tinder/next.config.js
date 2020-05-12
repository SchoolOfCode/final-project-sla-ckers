const withPWA = require('next-pwa');
const withOffline = require('next-offline');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  pwa: {
    dest: 'public',
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/quiz': { page: '/quiz' },
      '/knowledge-base': { page: '/knowledge-base' },
      '/org-dashboard': { page: '/org-dashboard' },
      '/orgsList': { page: '/orgsList' },
    };
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  // Have to list all the environment variables used here to make it available
  // to the client side code
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
};

const nextConfigWithPWA = withPWA(nextConfig);
const nextConfigWithPWAAndOffline = withOffline(nextConfigWithPWA);

module.exports = nextConfigWithPWAAndOffline;
// module.exports = { nextConfigWithPWAAndOffline, env };
