import * as path from 'path'
import fileExists from '../util/file-exists'

export default (neatoOptions) => {
  const { projectPath } = neatoOptions
  const configPath = path.join(projectPath, 'neato.config.js')

  if (!fileExists(configPath)) { return neatoOptions }

  return Object.assign({}, neatoOptions, require(configPath))
}
