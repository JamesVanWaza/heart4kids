const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack"); // to access built-in plugins

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: './src/js/index.js',
    },
    target: 'web',
    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['src/']
        },
        port: 2012
    },
    output: {
        filename: "[name].bundle.js",
        //filename: "main.js",
        //		path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [{
            // Whenever a javascript file is found, babel should run and do not compile node_module files
            test: /\js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS Strings
                { loader: 'style-loader' },

                // Translates CSS into CommonJS
                { loader: 'css-loader' },

                // Compiles Sass to CSS
                { loader: 'sass-loader' },
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            type: 'asset/resource',
        }
        ]
    },
    plugins: [
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/v1/about.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/v1/contact.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'donation.html',
            template: './src/v1/donation.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'future-projects.html',
            template: './src/v1/future-projects.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'getting-involved.html',
            template: './src/v1/getting-involved.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'hope-trips.html',
            template: './src/v1/hope-trips.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/v1/index.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'news-press.html',
            template: './src/v1/news-press.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'sponsors.html',
            template: './src/v1/sponsors.html'
        })
    ]
};