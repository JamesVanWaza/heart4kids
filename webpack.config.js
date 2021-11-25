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
        firebase: './src/js/firebase.js',
        paypal: './src/js/paypal.js',
        v1: './src/js/v1index.js'
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
        // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'about.html',
        //     template: './src/v1-oldsite/about.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'contact.html',
        //     template: './src/v1-oldsite/contact.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'donation.html',
        //     template: './src/v1-oldsite/donation.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'future-projects.html',
        //     template: './src/v1-oldsite/future-projects.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'getting-involved.html',
        //     template: './src/v1-oldsite/getting-involved.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'hope-trips.html',
        //     template: './src/v1-oldsite/hope-trips.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './src/v1-oldsite/index.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'v1/news-press.html',
        //     template: './src/v1-oldsite/news-press.html'
        // }),
        // // V1 Old Pages
        // new HtmlWebpackPlugin({
        //     filename: 'v1/sponsors.html',
        //     template: './src/v1-oldsite/sponsors.html'
        // }),


        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/v2-templates/about-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/v2-templates/contact-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'donation.html',
            template: './src/v2-templates/donation-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'future-projects.html',
            template: './src/v2-templates/future-projects-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'getting-involved.html',
            template: './src/v2-templates/getting-involved-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'hope-trips.html',
            template: './src/v2-templates/hope-trips-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/v2-templates/index-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'news-press.html',
            template: './src/v2-templates/news-press-template.html'
        }),
        // V2 Templates
        new HtmlWebpackPlugin({
            filename: 'sponsors.html',
            template: './src/v2-templates/sponsors-template.html'
        }),
    ]
};