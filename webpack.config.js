const path = require('path');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


const config = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: 'javascript/callbutton.js'
    },
    module: {
        rules: [
           {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader",  "sass-loader"]
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: [
                'url-loader?limit=10000',
                'img-loader'
              ]
            }
        ]
    },
    plugins: [
         new BrowserSyncPlugin({
            port: process.env.PORT,
            open: false,
            host: process.env.IP,
            proxy: {
                target: "localhost:8080",
            }
        })
    ]
}

module.exports = config;
    