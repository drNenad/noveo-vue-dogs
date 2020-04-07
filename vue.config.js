const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        services: path.resolve(__dirname, 'src/services'),
        helpers: path.resolve(__dirname, 'src/helpers'),
        consts: path.resolve(__dirname, 'src/consts')
      }
    }
  }
};
