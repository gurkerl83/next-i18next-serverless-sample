const path = require('path');

module.exports = {
  target: 'serverless',

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  webpack: (config, { isServer }) => {
    config.mode = 'production';

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }

    return config;
  }
};
