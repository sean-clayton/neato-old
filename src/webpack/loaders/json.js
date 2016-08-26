import path from 'path'
import fileExtensions from '../../file-extensions'

export default {
  name: 'json',
  configure({ projectPath }) {
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
