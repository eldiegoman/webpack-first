# Webpack First

Guide to use and underestand webpack

## Init project

    npm init

## Install webpack

    npm i webpack --save-dev -save-exact
    npm i webpack-cli --save-dev -save-exact

Use -save-exact to avoid futures issues

## Create an index.js file with any content

    console.log("init webpack");

## Transpile the first time

    npx webpack --entry ./index.js --output ./bundle.js --mode development

## Cretate webpack.config.js

```javascript
const path = require('path');
module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js',
	},
};
```

### Add script in package.json file

```json
"scripts": {
	"build": "webpack"
},
```

Run

    npm run build

### Add config file per environment and multiple entry/output points

#### Development - Production

```javascript
const path = require('path');
module.exports = {
	entry: {
		home: path.resolve(__dirname, '../../src/js/home.js'),
		detail: path.resolve(__dirname, '../../src/js/detail.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../../dist/dev'),
		filename: 'js/[name].js',
	},
};
```

#### Modify scripts in package.json

```json
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"build:dev": "webpack --config ./config/dev/webpack.config.js",
	"build:prod": "webpack --config ./config/prod/webpack.config.js"
},
```

### Add css support whit loaders

    npm i css-loader --save-dev -save-exact
    npm i style-loader --save-dev -save-exact

### Add css support with plugins

    npm i mini-css-extract-plugin --save-dev --save-exact

#### Modify config file to support css files

```javascript
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname, '../../src/js/home.js'),
		detail: path.resolve(__dirname, '../../src/js/detail.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../../dist/dev'),
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
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css',
		}),
	],
};
```

### Add html support

    npm i html-webpack-plugin --save-dev --save-exact

#### Modify config file to genere html file

```javascript
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname, '../../src/js/home.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../../dist/dev'),
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
```

### Add webpack dev server

    	npm i -D --save-exact webpack-dev-server

#### Update script in package.json

```json
	"scripts": {
		"build:dev": "webpack-dev-server --config ./config/dev/webpack.config.js"
	}
```

### Add webpack module replacement

Update the webpack.config.js for the development environment.

```javascript
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
```

#### Add the next code to detect changes

This code detects any changes in your code and updates the view in the browser without reloading the page

```javascript
const HotModuleReplacement = (dep) => {
	if (module.hot) {
		module.hot.accept('../index.js', function () {
			// do something
			dep();
		});
	}
};

export default HotModuleReplacement;
```

### Add suppor for ES6

Install the next dependences

#### Babel loader

    	npm i --save-dev --save-exact babel-loader

#### Add loader in webpack.config

Add the loader in the module.rules section

```json
{
	"test": /\.js$/,
	"use": "babel-loader",
	"exclude": /node_modules/
}
```

#### Babel core

    	npm i --save-dev --save-exact @babel/core

#### Babel plugin runtime

    	npm i --save-dev --save-exact @babel/plugin-transform-runtime

#### Babel runtime

    	npm i --save-exact @babel/runtime

#### Babel presets

    	npm i --save-dev --save-exact @babel/preset-env

##### Create a .babelrc file

```json
{
	"plugins": ["@babel/plugin-transform-runtime"],
	"presets": ["@babel/preset-env"]
}
```
