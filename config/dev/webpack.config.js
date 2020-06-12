const path = require('path');

module.exports = {
    entry:{
        home: path.resolve(__dirname, '../../src/js/home.js'),
        detail: path.resolve(__dirname, '../../src/js/detail.js'),
    },
    mode: 'development',
    output:{
        path: path.resolve(__dirname, '../../dist/dev'),
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}