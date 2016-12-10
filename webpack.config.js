let webpack = require('webpack');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

let ENV = process.env.npm_lifecycle_event;
let isDev = ENV === 'start' || ENV === 'startwin';
let isProd = ENV === 'build';

module.exports = {
	entry: path.resolve(__dirname, 'test', 'main.js'),
	output: {
		path: path.resolve(__dirname, 'test')
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!resolve-url!postcss-loader!sass',
				exclude: /node_modules/
			},
			{
				test: /\.(eot|font\.svg|ttf|woff|woff2)$/,
				loader: 'file?name=fonts/[name].[ext]',
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new htmlWebpackPlugin({
			hash: true,
			template: 'test/index.ejs',
			env: isDev && 'dev' || isProd && 'prod'
		})
	],
	postcss: function() {
		return [require('autoprefixer')];
	}
};