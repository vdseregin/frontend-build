const path = require('path');

module.exports = {
  PROJECT_ROOT: process.env.PROJECT_ROOT ? process.env.PROJECT_ROOT : process.cwd(),
  BASE_CONFIG_DIR: path.resolve(__dirname, '..', 'config'),
};