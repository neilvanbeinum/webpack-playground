const path = require('path'); // you have to use older commonJS require inside webpack config files
// const TerserPlugin = require('terser-webpack-plugin');  included by default
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'dave': './src/dave.js'
  },
  output: {
    // result of build, created first time
    filename: '[name].[contenthash].js',   // [name]  dynamically references the entry filename
    // path for the above, created first time
    path: path.resolve(__dirname, './dist'),
    // the above two create the path and file you should point your e.g. index.html at
    publicPath: '/party_time_assets/'
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          MiniCssExtractPlugin.loader, 'css-loader' // use both loaders  - ordered?
        ]
      },
      {
        test: /\.scss$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('precss'),  // let's you use modern CSS features
                  require('autoprefixer')
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,  // I think this is how WP knows whether to apply this rule to the file
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      }
    ]
  },
  plugins: [
    // new TerserPlugin(),  included by default
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello world',
      chunks: ['hello-world', 'vendors~dave~hello-world'],  // this is key because it tells WP which bundle to use
      filename: 'hello-world.html',
      template: './src/index_template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Dave',
      chunks: ['dave', 'vendors~dave~hello-world'],  // this is key because it tells WP which bundle to use
      filename: 'dave.html',
      template: './src/index_template.html'
    })
  ]
}
