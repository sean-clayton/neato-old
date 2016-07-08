import * as path from 'path'
import fileExtensions from '../../file-extensions'
import actions from '../../actions'

const eslint = {
  name: 'eslint',
  configure({ watch, action, projectPath }) {
    const ignoreDebugger = watch || action === actions.DEVELOP
    return {
      eslint: {
        configFile: path.join(projectPath, '.eslintrc'),
        rules: ignoreDebugger ? {
          'no-debugger': 0
        } : {}
      },
      module: {
        preLoaders: [
          {
            test: fileExtensions.test.JAVASCRIPT,
            loader: 'eslint',
            exclude: /node_modules/
          }
        ]
      }
    }
  }
}

export default eslint
