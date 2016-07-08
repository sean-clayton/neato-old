import fileExtensions from '../../file-extensions'

const json: INeatoWebpackConfig = {
  name: 'json',
  configure() {
    return {
      module: {
        loaders: [
          {
            test: fileExtensions.test.JSON,
            loader: 'json-loader'
          }
        ]
      }
    }
  }
}

export default json
