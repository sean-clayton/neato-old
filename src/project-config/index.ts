import * as path from 'path'
import fileExists from '../util/file-exists'
import _extends from '../util/extends'

export default (neatoOptions) => {
  const { projectPath } = neatoOptions
  const configPath = path.join(projectPath, 'neato.config.js')

  if (!fileExists(configPath)) { return neatoOptions }

  return _extends({}, neatoOptions, require(configPath))
}
