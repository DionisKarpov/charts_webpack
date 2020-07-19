const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'src/styles/styles.css': 'src/styles/styles.scss'
	},
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js', 
    publicPath: '/'
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
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      })
  ],
  devServer: { 
      contentBase: './src/public', 
      port: 8000,
  } 
};