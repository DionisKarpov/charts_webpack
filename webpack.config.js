const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'src/styles/styles.css': 'src/styles/styles.scss'
	},
  entry: {
		index: __dirname + "/src/app/index.js",
		chart: __dirname + "/src/app/chart.js",
		athletes: __dirname + "/src/app/athletes.js",
		positions: __dirname + "/src/app/positions.js",
		charts: __dirname + "/src/app/charts.js",
	},
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
	},
  module: { 
      rules: [ 
				{
					test: /\.js$/,
					use: 'babel-loader',
					exclude: [
						/node_modules/
					]
				},
				{
					test: /\.(sass|scss)$/,
					use: [{
							loader: "style-loader"
					}, {
							loader: "css-loader"
					}, {
							loader: "sass-loader"
					}]
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								query: {
									name:'[path][name].[ext]'
								}
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								query: {
									mozjpeg: {
										progressive: true,
									},
									gifsicle: {
										interlaced: true,
									},
									optipng: {
										optimizationLevel: 7,
									}
								}
							}
						}]
				}
      ]
  },
  plugins: [ 
      new HtmlWebpackPlugin({
				template: './src/public/index.html',
				inject: true,
				chunks: ['index'],
				filename: 'index.html'
			}),
			new HtmlWebpackPlugin({
				template: './src/public/chart.html',
				inject: true,
				chunks: ['chart'],
				filename: 'chart.html'
			}),
			new HtmlWebpackPlugin({
				template: './src/public/athletes.html',
				inject: true,
				chunks: ['athletes'],
				filename: 'athletes.html'
			}),
			new HtmlWebpackPlugin({
				template: './src/public/positions.html',
				inject: true,
				chunks: ['positions'],
				filename: 'positions.html'
			}),
			new HtmlWebpackPlugin({
				template: './src/public/charts.html',
				inject: true,
				chunks: ['charts'],
				filename: 'charts.html'
			}),
  ],
  devServer: { 
      contentBase: './src/public', 
      port: 8000,
  } 
};