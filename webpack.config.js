module.exports = {
    module: {
      rules: [
        
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [/node_modules\/@react-aria/],
        },
      ],
    },
  };
  