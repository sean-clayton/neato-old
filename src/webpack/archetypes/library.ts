import { join } from 'path'
import actions from '../../actions'

const probeExternals = projectPath => {
  const projectPackageJSON = require(join(projectPath, 'package.json'))
  return Object.keys(projectPackageJSON.peerDependencies || {})
}

const neatoLibrary: INeatoWebpackConfig = {
  name: 'library',
  configure({ library, projectPath, action }) {
    if (!library) return {}

    const externals = probeExternals(projectPath)

    return {
      entry: `./${library}.js`,
      output: {
        path: join(projectPath, 'dist'),
        filename: `${library}.js`,
        libraryTarget: action === actions.TEST ? undefined : 'commonjs2'
      },
      externals: action === actions.TEST ? [] : externals
    }
  }
}

export default neatoLibrary
