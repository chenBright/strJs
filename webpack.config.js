let webpack = require('webpack'),
  path = require('path'),
  libName = 'str',
  outputFile = libName + '.js',
  plugins = [],
  uglifyJs = webpack.optimize.UglifyJsPlugin,
  env = process.env.NODE_ENV

if (env === 'pro') {
  plugins.push(new uglifyJs({
    minimize: true
  }))
}

let config = {
  entry: __dirname + '/src/index.js',
  devtool: env === 'pro' ? '' : 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libName,
    libraryTarget: 'umd',
    umdNameedDefine: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel', 'eslint-loader'],
      exclude: /node_modules|dist/
    }]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
}

module.exports = config
