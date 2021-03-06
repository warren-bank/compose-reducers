const webpack = require('webpack')
const path    = require('path')

module.exports = {
    entry: './src/globals.js',
    externals: {
      redux: 'Redux'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'compose_reducers.js',
        sourceMapFilename: 'compose_reducers.map'
    },
    devtool: '#source-map',
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
            path.resolve('../node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}
