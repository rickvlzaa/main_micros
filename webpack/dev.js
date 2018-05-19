const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        server: './src/server/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/'
    },
    resolve: {
        mainFiles: ['index.js'],
        extensions: ['.js', '.jsx']
    },
    node: {
        __dirname: true,
        __filename: true
    },
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./build/*.*'] ,{
            root: __dirname,
        })
    ]
}