const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname, '../../src/index.js'),
	},
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../../dist/prod'),
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
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
		new HtmlWebpackPlugin({
			title: 'Wepack First',
		}),
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css',
		}),
	],
};
