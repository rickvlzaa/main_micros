const nodeExternals = require('webpack-node-externals')
const path = require('path')
module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        server: './server/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    resolve: {
        mainFiles: ['index.js'],
        extensions: ['.js', '.jsx']
    },
    mode: 'production',
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
    }
}