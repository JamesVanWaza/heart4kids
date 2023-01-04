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
            filename: 'about.html',
            template: './src/html-templates/about.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/v1-oldsite/contact.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'donation.html',
            template: './src/html-templates/donation.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'future-projects.html',
            template: './src/html-templates/future-projects.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'getting-involved.html',
            template: './src/html-templates/getting-involved.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'hope-trips.html',
            template: './src/v1-oldsite/hope-trips.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'v1/news-press.html',
            template: './src/html-templates/news-press.html'
        }),
        // V1 Old Pages
        new HtmlWebpackPlugin({
            filename: 'v1/sponsors.html',
            template: './src/html-templates/sponsors.html'
        })
    ]
};