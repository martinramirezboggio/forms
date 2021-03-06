const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
        },{
            use: ['style-loader', 'css-loader'],
            test: /\.css/
        }]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
}