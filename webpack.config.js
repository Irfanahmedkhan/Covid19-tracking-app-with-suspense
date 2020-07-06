const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "./build",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            //   {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //       "file-loader",
            //       {
            //         loader: "image-webpack-loader",
            //         options: {
            //           bypassOnDebug: true, // webpack@1.x
            //           disable: true, // webpack@2.x and newer
            //         },
            //       },
            //     ],
            //   },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./index.html"),
        }),
    ],
};

