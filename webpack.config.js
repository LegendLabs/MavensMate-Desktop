const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/renderer/app.js')]
  },
  output: {
    publicPath: 'http://localhost:8080/build',
    filename: 'app.js'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src/main'),
    publicPath: 'http://localhost:8080/build'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=1'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    })
  ]
};
