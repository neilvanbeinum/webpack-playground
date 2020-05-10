const path = require('path'); // you have to use older commonJS require inside webpack config files

module.exports = {
  entry: './src/index.js', // usually imports all other dependencies
  output: {
    // result of build, created first time
    filename: 'bundle.js',
    // path for the above, created first time
    path: path.resolve(__dirname, './dist'),
    // the above two create the path and file you should point your e.g. index.html at
    publicPath: './dist/'
  },
  mode: 'none',
  module: { 
    rules: [
      {
        test: /\.(png|jpg)$/,  // I think this is how WP knows whether to apply this rule to the file
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
