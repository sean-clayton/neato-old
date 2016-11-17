import path from 'path'
import fileExtensions from '../../file-extensions'

export default {
  name: 'image',
  configure({ projectPath }) {
    return {
      module: {
        rules: [
          {
            test: fileExtensions.test.IMAGE,
            include: [
              path.resolve(projectPath, 'src')
            ],
            use: {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name]-[chunkhash].[ext]'
              }
            }
          }
        ]
      }
    }
  }
}
