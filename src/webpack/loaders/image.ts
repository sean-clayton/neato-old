import { Configuration as WebpackConfig } from 'webpack'
import fileExtensions from '../../file-extensions'

const image: INeatoWebpackConfig = {
  name: 'image',
  configure(): WebpackConfig {
    return {
      module: {
        loaders: [
          {
            test: fileExtensions.test.IMAGE,
            loader: 'url-loader?limit=8192&name=[name]-[hash]-[ext]'
          }
        ]
      }
    }
  }
}

export default image
