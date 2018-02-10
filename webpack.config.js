const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?sourceMap!sass-loader?sourceMap"
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use: "css-loader?sourceMap"
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			}, 
			{
				test: /\.(png|jpg|gif)$/,
				use: [
				  {
					loader: 'url-loader',
					options: {
					  limit: 8192
					}
				  }
				]
			  }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			inject: 'body'
		}),
        new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: 'styles.[hash].css'
		}),
		new CopyWebpackPlugin([
            {from: __dirname + '/src/img', to: 'img'} 
        ])
	],
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3000,
		stats: 'minimal',
		contentBase: './dist',
		historyApiFallback: true,
	}
};
