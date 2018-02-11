const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
					use: "css-loader?sourceMap!autoprefixer-loader?browsers=last 2 versions!sass-loader?sourceMap"
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
					loader: 'file-loader',
					options: {}
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
		})
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
