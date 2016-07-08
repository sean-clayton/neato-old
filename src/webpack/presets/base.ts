import { NoErrorsPlugin } from 'webpack'
import * as path from 'path'
import actions from '../../actions'

const base = {
  name: 'base',
  configure({ action, projectPath, neatoPath }) {
    const projectSourcePath = path.join(projectPath, 'src')

    const devtool = action === actions.BUILD ? 'source-map' : 'cheap-module-eval-source-map'

    return {
      context: projectSourcePath,
      devtool,
      plugins: [new NoErrorsPlugin()],
      resolve: {
        extensions: [''],
        root: [
          path.join(projectPath, '/node_modules'),
          projectSourcePath,
          path.join(neatoPath, '/node_modules')
        ]
      },
      resolveLoader: {
        modulesDirectories: [
          path.join(neatoPath, '/node_modules'),
          path.join(projectPath, '/node_modules')
        ]
      }
    }
  }
}

export default base
