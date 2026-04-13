/**
 * Webpack config used only by UXPin Merge (bundles components for the editor).
 * @see https://www.uxpin.com/docs/merge/webpack-configuration/
 */
const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      // Only TypeScript here. Do not match plain `.js` — Merge compiles preset metadata
      // with its own Babel + classic JSX pragma; processing those files breaks `require()` of the preset bundle.
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
};
