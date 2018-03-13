const fs = require('fs'),
path = require('path'),
webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
Entry = './src';

var EntryList = fs.readdirSync(Entry).reduce((o,filename)=>{
    o[filename] = './'+path.join(Entry,filename,'main.ts');
    return o;   
},{})

const isProduction = (process.env.NODE_ENV == 'production'?true:false);
module.exports = {
    entry: EntryList,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].[hash].js"
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.runtime.esm.js',
            'vue-router': 'vue-router/dist/vue-router.esm.js',
            'vue-mugen-scroll': 'vue-mugen-scroll/dist/vue-mugen-scroll.js',
            'vuex': 'vuex/dist/vuex.esm.js',
        },
        extensions:['.ts','.tsx','.js']
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use:{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: [/\.css$/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                minimize: isProduction
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1000,
                    name: '[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename:"[name].[contenthash].css"
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'template.html'),
            filename: 'index.html',
            chunks:['todo'],
            hash: false,
            minify: 
            {
              removeAttributeQuotes: isProduction
            }
        }),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        compress: true,
        open: false,
        port: 8008,
        publicPath: "/"
    }
}