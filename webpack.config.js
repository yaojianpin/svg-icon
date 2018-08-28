'use strict';
const autoprefixer = require('autoprefixer');
const lessPluginLists = require('less-plugin-lists');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path:  __dirname + '/dist',
        filename: 'index.js',
        library: 'svg-icon',
        libraryTarget: 'umd'
    },
    externals: [
        {
            'react': {
                root: 'react',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            loader: require.resolve('ts-loader')
          },
          {
            test: /\.less$/,
            use: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                  plugins: () => [
                    autoprefixer({
                      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                    }),
                    //pxtorem({ rootValue: 100, propWhiteList: [] })
                  ],
                },
              },
              {
                loader: require.resolve('less-loader'),
                options: {
                  plugins: [
                    new lessPluginLists()
                  ]
                },
              },
            ],
          },
        ]
    },
    resolve: {
      extensions: [ '.js', '.jsx', '.ts', '.tsx']
    }
};