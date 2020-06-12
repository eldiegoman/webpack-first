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
const  path = require('path');
module.exports = {
	entry:  './index.js',
	mode:  'development',
	output:{
		path:  path.resolve(__dirname),
		filename:  'bundle.js'
	}
}
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
const  path = require('path');
module.exports = {
	entry:{
		home:  path.resolve(__dirname, '../../src/js/home.js'),
		detail:  path.resolve(__dirname, '../../src/js/detail.js'),
	},
	mode:  'development',
	output:{
		path:  path.resolve(__dirname, '../../dist/dev'),
		filename:  'js/[name].js'
	}
}
```
#### Modify scripts in package.json

```json
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"build:dev": "webpack --config ./config/dev/webpack.config.js",
	"build:prod": "webpack --config ./config/prod/webpack.config.js"
},
```