import * as webpack from 'webpack'

const optimize = {
  name: 'optimize',
  configure({ optimize }): any { // Return type of "any"" since it may be an empty object
    if (!optimize) {
      return {}
    }

    return {
      plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ]
    }
  }
}

export default optimize
