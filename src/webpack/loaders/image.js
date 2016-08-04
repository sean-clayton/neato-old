import path from 'path'
import fileExtensions from '../../file-extensions'

export default {
  name: 'image',
  configure({ projectPath }) {
    return {
      module: {
        loaders: [
          {
            test: fileExtensions.test.IMAGE,
            include: [
              path.resolve(projectPath, 'src')
            ],
            loader: 'url-loader?limit=8192&name=[name]-[chunkhash].[ext]'
          }
        ]
      }
    }
  }
}
