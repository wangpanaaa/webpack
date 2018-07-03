const path = require('path');
const html_webpac = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        //本地服务路径
        inline: true,
        //实时刷新
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                            //css压缩
                        }
                    }],
                    publicPath: "../"
                })
            },//支持css
            {
                test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use: [{
                    loader: "url-loader",
                    options: {limit: 50000, name: "[hash:8].[name].[ext]", outputPath: "../dist/img/"}
                },]
            },//支持背景图片,字体
            {test: /\.html$/, use: "html-url-loader"},//支持body中添加图片
            {
                test: /\.(js)|(jsx)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude:/node_modules/ //除了这个目录
            },//支持babel
        ]
    },
    plugins: [//插件
        new html_webpac({
            template: './src/index.html',
            minify: {//缩小输出
                removeAttributeQuotes: true,//去除引号
                removeComments: true,//去除注释
                removeEmptyAttributes: true,//去除空属性
                collapseWhitespace: true//去除空格
            }
        }),
        new ExtractTextPlugin('./css/style.css')//分离css
    ],

};