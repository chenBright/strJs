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
  // entry: ['babel-polyfill', __dirname + '/src/index.js'],
  devtool: env === 'pro' ? '' : 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libName,
    libraryTarget: 'umd',
    umdNameedDefine: true
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules|dist/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules|dist/
    }]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins,
  eslint: {
    failOnWarning: false, // eslint报warning了就终止webpack编译
    failOnError: true, // eslint报error了就终止webpack编译
    cache: true, // 开启eslint的cache，cache存在node_modules/.cache目录里
  }
}

module.exports = config
