const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  /**
   * entry 文件的目录,默认为当前目录,
   * 如指定为src则./src/index.js前面的src可以去掉,同时html plugin里面的src也要去掉
   * 可是这样会导致react-hot-loacer报错,它可不是在src下面地哦
   * 不配时为当前目录
   * */
  context: path.resolve(__dirname, ''),
  entry: {
    main: [
      '../src/index.js'
    ],
    vendor: ['babel-polyfill', 'react', 'react-dom', 'prop-types']
  },
  devtool: 'none',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      CONSTANT: path.resolve(__dirname, '../src/core/constant.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: [/node_modules/],
        use: [ 'babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({//['style-loader', 'css-loader', 'sass-loader']
          use: ['css-loader', 'sass-loader']//需要删除style-loader,因为它是用来将style添加到html里面的,不删会报错
        })
      },
      {
        test: /\.png|\.jpg/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
      filename: '[name].js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('main.css'),
    new UglifyjsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    }),
    new webpack.LoaderOptionsPlugin({minimize: true})//uglify不压缩loader了,要用它来压缩
  ]
};