const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          }
        },
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
}
