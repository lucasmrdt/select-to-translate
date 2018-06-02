var path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'contentScript.js',
		path: path.resolve(__dirname, 'dist')
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}