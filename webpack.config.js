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
        // About
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/html-templates/about-template.html'
        }),
        // Contact
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/html-templates/contact-template.html'
        }),
        // ChangeLog
        new HtmlWebpackPlugin({
            filename: 'changelog.html',
            template: './src/html-templates/changelog-template.html'
        }),
        // Donation
        new HtmlWebpackPlugin({
            filename: 'donation.html',
            template: './src/html-templates/donation-template.html'
        }),
        // Future Projects
        new HtmlWebpackPlugin({
            filename: 'future-projects.html',
            template: './src/html-templates/future-projects-template.html'
        }),
        // Getting Involved
        new HtmlWebpackPlugin({
            filename: 'getting-involved.html',
            template: './src/html-templates/getting-involved-template.html'
        }),
        // Hope Trips
        new HtmlWebpackPlugin({
            filename: 'hope-trips.html',
            template: './src/html-templates/hope-trips-template.html'
        }),
        // Index
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        // News Press
        new HtmlWebpackPlugin({
            filename: 'news-press.html',
            template: './src/html-templates/news-press-template.html'
        }),
        // Sponsors
        new HtmlWebpackPlugin({
            filename: 'sponsors.html',
            template: './src/html-templates/sponsors-template.html'
        })
    ]
};
