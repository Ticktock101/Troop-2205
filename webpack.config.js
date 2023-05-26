const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for compiled files
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Match SCSS files
        use: [
          'style-loader', // Inject CSS into the DOM
          'css-loader', // Translate CSS into CommonJS
          'sass-loader' // Compile Sass to CSS
        ]
      }
    ]
  }
};
