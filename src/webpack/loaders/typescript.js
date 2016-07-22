import path from 'path'
import fileExtensions from '../../file-extensions'

export default {
  name: 'typescript',
  configure({ action, projectPath, typescript = {} }) {
    const userPaths = (typescript.transpileDependencies || []).map((dependency) => (
      path.join(projectPath, 'node_modules', dependency)
    ))

    return {
      resolve: {
        extensions: fileExtensions.list.TYPESCRIPT
      },
      module: {
        loaders: [
          {
            test: fileExtensions.test.TYPESCRIPT,
            include: [
              path.join(projectPath, 'src'),
              ...userPaths
            ],
            loader: 'awesome-typescript'
          }
        ]
      }
    }
  }
}
