const webpack = require("webpack"); // to access built-in plugins

const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        algolia: './src/js/algolia.js',
        donate: './src/js/donate.js',
        firebase: './src/js/firebase.js',
        v1: './src/js/index.js'
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    output: {
        filename: "[name].bundle.js",
        //filename: "main.js",
        //		path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS Strings
                    { loader: 'style-loader' },

                    // Translates CSS into CommonJS
                    { loader: 'css-loader' },

                    // Compiles Sass to CSS
                    { loader: 'sass-loader' }
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/html-templates/about-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'board-members.html',
            template: './src/html-templates/board-members-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/html-templates/contact-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'donation.html',
            template: './src/html-templates/donation-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'faq.html',
            template: './src/html-templates/faq-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'future-projects.html',
            template: './src/html-templates/future-projects-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'getting-involved.html',
            template: './src/html-templates/getting-involved-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'hope-trips.html',
            template: './src/html-templates/hope-trips-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'news-press.html',
            template: './src/html-templates/news-press-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'sponsors.html',
            template: './src/html-templates/sponsors-template.html'
        }),
    ]
};