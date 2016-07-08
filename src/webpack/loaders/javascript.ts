import { HotModuleReplacementPlugin } from 'webpack'
import * as path from 'path'
import fileExtensions from '../../file-extensions'
import actions from '../../actions'

const reactTransform = require('babel-plugin-react-transform')

const javascript: INeatoWebpackConfig = {
  name: 'javascript',
  configure({ action, projectPath, javascript = {} }) {
    const hmrEnv = {
      development: {
        plugins: [
          [reactTransform, {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }]
          }]
        ]
      }
    }

    const userPaths = (javascript.transpileDependencies || []).map(dependency => path.join(projectPath, 'node_modules', dependency))

    return {
      babel: {
        babelrc: path.join(projectPath, '.babelrc'),
        env: action === actions.DEVELOP ? hmrEnv : {}
      },
      plugins: action === actions.DEVELOP ? [new HotModuleReplacementPlugin()] : [],
      resolve: {
        extensions: fileExtensions.list.JAVASCRIPT
      },
      module: {
        loaders: [
          {
            test: fileExtensions.test.JAVASCRIPT,
            include: [
              path.join(projectPath, 'src'),
              ...userPaths
            ],
            loader: 'babel'
          }
        ]
      }
    }
  }
}

export default javascript
