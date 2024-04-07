// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
    },
    'cssnano': {} // Add cssnano plugin for minification
  },
  };
  