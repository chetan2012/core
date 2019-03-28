
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, '');

module.exports = {
  mode: 'development',  
  entry: {
    app: APP_DIR + "/coreUtility.js"
  },
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    chunkFilename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd', 
    umdNamedDefine: true
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ]
  },
  module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            include: APP_DIR,
            exclude: [/node_modules/, /dist/],
            use: {
              loader: "babel-loader"
            }
        }
      ]
  }
};