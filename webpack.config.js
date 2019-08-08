/*** webpack.config.js ***/

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/browser/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "examples/browser/index.tsx"),
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    devServer: {
        port: 3001,
    }
};