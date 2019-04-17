const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const DIR_PATH = path.resolve(__dirname,'dist');

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]


};

module.exports = config;