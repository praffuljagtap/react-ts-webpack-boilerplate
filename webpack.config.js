const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: ['ts-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|jpeg|png|svg|gif)$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/assets/index.html' })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}