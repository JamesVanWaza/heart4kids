const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack"); // to access built-in plugins

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        algolia: './src/js/algolia.js',
        firebase: './src/js/firebase.js',
        v1: './src/js/v1index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9008
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
        new HtmlWebpackPlugin({
            filename: 'v1about.html',
            template: './src/v1-templates/v1about-template.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'v1contact.html',
            template: './src/v1-templates/v1contact-template.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'v1home.html',
            template: './src/v1-templates/v1home-template.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'v1services.html',
            template: './src/v1-templates/v1services-template.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'v1about.html',
            template: './src/v1-templates/v1about-template.html'
        }),
        // Home Page
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        // About Page
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/html-templates/about-template.html'
        }),
        // Services Page
        new HtmlWebpackPlugin({
            filename: 'services.html',
            template: './src/html-templates/services-template.html'
        }),
        // Jobsearch Page
        new HtmlWebpackPlugin({
            filename: 'jobsearch.html',
            template: './src/html-templates/jobsearch-template.html'
        }),
        // Contact Page
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/html-templates/contact-template.html'
        }),
    ]
};