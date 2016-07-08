import * as path from 'path'
import json from '../../utils/json'

const neatoScripts = {
  'neato-build': 'neato build',
  'neato-dev': 'neato develop'
}

const withoutDefaults = (scripts = {}) => {
  const defaultScripts = {}

  return Object.keys(scripts)
    .filter(key => scripts[key] !== defaultScripts[key])
}

export default (projectPath: string) => {
  const packagePath = path.join(projectPath, 'package.json')
  const packageJSON = json.read(packagePath)

  json.write(packagePath, Object.assign(
    {},
    { packageJSON },
    Object.assign(
      {},
      { neatoScripts },
      packageJSON.scripts
    )
  ))
}
