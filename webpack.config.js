const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = (mode === 'development') ? 'source-map' : false;

module.exports = {
   mode,
   target,
   devtool,
   devServer: {
      port: 3000,
      static: {
         directory: path.resolve(__dirname, './dist')
      },
      open: true,
      hot: true,
   },
   performance: {
      hints: false,
   },
   entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/'),
      clean: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'webpack Boilerplate',
         template: path.resolve(__dirname, './src/index.html'),
         filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: 'bundle.css',
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(c|sa|sc)ss$/i,
            use: [
               devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
               'css-loader',
               {
                  loader: 'postcss-loader',
                  options: {
                     postcssOptions: {
                        plugins: [require('postcss-preset-env')],
                     },
                  },
               },
               'sass-loader',
            ],
         },
         {
            test: /\.m?js$/i,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
      ],
   },
};
