module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jp?g|png|svg|gif)$/,
          loader: 'file-loader',
          options: {
            name:'images/[name].[ext]'
          },
        },
      ],
    },
  };
};