const CnameWebpackPlugin = require('cname-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.plugins.push(
      new CnameWebpackPlugin({
        domain: "www.linkandreas.de",
      }),
    );
    return config;
  },
};