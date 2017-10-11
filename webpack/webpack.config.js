const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://127.0.0.1:9090`,
      'webpack/hot/only-dev-server',
      '../src/index.js'
    ],
    vendor: ['babel-polyfill', 'react', 'react-dom', 'prop-types']
  },
  devtool: 'cheap-source-map',
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
        use: [ 'react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'sass-loader']
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
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: '../src',//决定静态文件的位置,可以是数组
    publicPath: '/',//决定bundle文件位置
    host: '0.0.0.0',//主机
    port: 9090,//端口
    historyApiFallback: true,//支持html5的路由
    hot: true,//hot与hotOnly都是开启hot module replacement,
              // 但是hotOnly不会刷新页面, 假如用hot,替换失败它会去刷新页面
              //在测试的过程中,没有加hot.accept之前, 用hot直接就刷页面了,用hotOnly则不会刷
    //hotOnly: true,//加上它之后能将更新失败的信息显示出来
    compress: true,//开启gzip
    lazy: false,//dev server仅仅在browser请求该文件时才会去编译
    open: false,//是否打开浏览器
    // openPage: '',//跳到指定页面,当打开浏览器时,
    // proxy: {//设置代理
    //   '/api/*': {
    //     target: 'localhost: 9091',
    //     pathRewrite: (url)=>{
    //       return ''
    //     }
    //   }
    // }
  }
};