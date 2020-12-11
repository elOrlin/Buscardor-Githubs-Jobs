const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/app.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 7000
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'Orlin',
                    chunks: 'all'
                }
            }
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: 'Buscador de Github Jobs'
        })
    ]
}