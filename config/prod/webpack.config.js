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
				test: /\.css$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					'css-loader',
				],
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
