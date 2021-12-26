const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPngQuant = require('imagemin-pngquant');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /styles/,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/styles/resources.scss',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        include: /styles/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/styles/resources.scss',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: [
          path.resolve(__dirname, 'src/scripts/views'),
        ],
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/heros/**'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'FoodHut',
      short_name: 'FoodHut',
      description: 'My Progressive Restaurant Catalogue Web App!',
      background_color: '#ffffff',
      theme_color: '#114E60',
      crossorigin: 'use-credentials',
      start_url: '/',
      display: 'standalone',
      ios: true,
      fingerprints: false,
      inject: true,
      icons: [
        {
          src: path.resolve('src/public/images/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'icons',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/scripts/src-sw.js',
      swDest: 'sw.js',
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        ImageminPngQuant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
  ],
};
