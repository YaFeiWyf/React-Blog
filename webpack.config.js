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
    /*entry: [
     // Add the client which connects to our middleware
     // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
     // useful if you run your app from another point like django
     'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
     // And then the actual application
     './index.js',
     './index.html'
     ],*/
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
    devServer: {
        contentBase: './client',
        hot: true
    }
}
/* end baseConfig */

/* get env */
function getEnv() {
    const args = require('minimist')(process.argv.slice(2));
    var env;
    if (args._.length > 0 && args._.indexOf('start') !== -1) {
        env = 'test';
    } else if (args.env) {
        env = args.env;
    } else {
        env = 'dev';
    }
    return env
}

var env = getEnv();
/* end get env */

/*define envConfig*/
var envConfig = {
    'build': {
        output: {
            path: path.join(__dirname, './static'),
            filename: 'bundle-[hash:6].js',
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new webpack.DefinePlugin({
                'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    },
    'dev': {
        output: {
            path: path.join(__dirname, './static'),
            filename: '[name].js',
            chunkFilename: '[id].[chunkhash:5].chunk.js',
            publicPath: '/__build__/'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new webpack.DefinePlugin({
                'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')}
            }),
            new webpack.NoErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}

/* end define envConfig*/

module.exports = Object.assign({}, baseConfig, envConfig[env])