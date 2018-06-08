const webpack = require('webpack')
const { resolve } = require('path')
module.exports = {
	entry: {
		index: './src/Index.tsx',
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/, loader: 'ts-loader', options:{ configFile: resolve(__dirname, 'tsconfig.client.json') },
			},
			// { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
		],
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},

	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: 'all',
		},
		// runtimeChunk: {
		// 	name: 'manifest',
		// },
	},

	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: resolve(__dirname, 'dist/client/'),
		publicPath: '/dist/client/',
	},
}
