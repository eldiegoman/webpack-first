const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry: {
		index: path.resolve(__dirname, '../../src/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../../dist/dev'),
		filename: 'js/[name].js',
	},
	devServer: {
		hot: true,
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 90000,
					},
				},
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'webpack-dev-server',
			template: path.resolve(__dirname, '../../src/index.html'),
		}),
	],
};
