let path = require('path');

module.exports = {
    outputDir: 'dist',
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            hack: `true; @import "${path.join(__dirname, "./src/assets/style/vantCustom.less")}"`,
          }
        }
      }
    }
  };
