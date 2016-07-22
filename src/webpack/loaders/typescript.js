import path from 'path'
import reactTransform from 'babel-plugin-react-transform'
import fileExtensions from '../../file-extensions'
import actions from '../../actions'

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin

export default {
  name: 'typescript',
  configure({ action, projectPath, typescript = {} }) {
    const userPaths = (typescript.transpileDependencies || []).map((dependency) => (
      path.join(projectPath, 'node_modules', dependency)
    ))
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

    return {
      babel: {
        babelrc: path.join(projectPath, '.babelrc'),
        env: action === actions.DEVELOP ? hmrEnv : {}
      },

      'awesome-ts': {
        tsconfig: path.join(projectPath, 'tsconfig.json')
      },

      resolve: {
        extensions: fileExtensions.list.TYPESCRIPT
      },

      plugins: [ new ForkCheckerPlugin() ],
      module: {
        loaders: [
          {
            test: fileExtensions.test.TYPESCRIPT,
            include: [
              path.join(projectPath, 'src'),
              ...userPaths
            ],
            loader: 'babel!awesome-typescript'
          }
        ]
      }
    }
  }
}
