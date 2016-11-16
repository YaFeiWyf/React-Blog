var rucksack = require('rucksack-css');
var webpack = require('webpack');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

/* baseConfig */
var baseConfig = {
    context: path.join(__dirname, './client'),
    entry: {
        jsx: ['./index.js', hotMiddlewareScript],
        html: ['./index.html', hotMiddlewareScript],
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'antd',
            'draft-js',
            hotMiddlewareScript
        ]
    },
    output: {
        path: path.join(__dirname, './staticResource'),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash:5].chunk.js',
        publicPath: '/__build__/'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
                //loader: 'url-loader?limit=8192'
            }, // inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel-loader'
                ]
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [
        rucksack({
            autoprefixer: true
        })
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
/* end baseConfig */

module.exports = baseConfig;
