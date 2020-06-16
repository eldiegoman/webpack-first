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
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Wepack First',
		}),
	],
};
