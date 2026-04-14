/* eslint-disable no-undef */

const { VueLoaderPlugin: Vue2LoaderPlugin } = require('vue-loader')
const { VueLoaderPlugin: Vue3LoaderPlugin } = require('vue-loader-next')

const commonRules = [
  {
    test: /\.m?js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
            },
            useBuiltIns: 'usage',
            corejs: 2,
          },
        ],
      ],
    },
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  {
    test: /\.worker\.m?js$/,
    loader: 'worker-loader',
    options: {
      inline: 'fallback',
    },
  },
]

const createConfig = ({
  filename,
  vueLoader,
  plugin,
  vueLoaderOptions,
  resolve,
}) => ({
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: vueLoader,
        options: vueLoaderOptions,
      },
      ...commonRules,
    ],
  },
  output: {
    filename,
    library: {
      name: 'pdf-viewer-vue',
      type: 'umd',
    },
  },
  optimization: {
    minimize: true,
  },
  externals: {
    vue: 'vue',
  },
  performance: {
    hints: false,
  },
  resolve,
  plugins: [plugin],
})

module.exports = (env = {}) => {
  const target = env.target || 'vue3'

  if (target === 'vue2') {
    return createConfig({
      filename: 'vue2-pdf-viewer.js',
      vueLoader: 'vue-loader',
      plugin: new Vue2LoaderPlugin(),
      vueLoaderOptions: undefined,
    })
  }

  return createConfig({
    filename: 'vue3-pdf-viewer.js',
    vueLoader: 'vue-loader-next',
    plugin: new Vue3LoaderPlugin(),
    vueLoaderOptions: undefined,
  })
}
