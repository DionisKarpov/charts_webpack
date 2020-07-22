const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'src/styles/styles.css': 'src/styles/styles.scss'
	},
  entry: {
		index: __dirname + "/src/app/index.js",
		home: __dirname + "/src/app/home.js",
		athletes: __dirname + "/src/app/athletes.js",
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
									name:'assets/[name].[ext]'
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
				template: './src/public/home.html',
				inject: true,
				chunks: ['home'],
				filename: 'home.html'
			}),
			new HtmlWebpackPlugin({
				template: './src/public/athletes.html',
				inject: true,
				chunks: ['athletes'],
				filename: 'athletes.html'
			}),
  ],
  devServer: { 
      contentBase: './src/public', 
      port: 8000,
  } 
};