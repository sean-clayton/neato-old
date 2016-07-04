/// <reference path="../../definitions/index.d.ts" />

import * as path from 'path'
import fileExists from '../utils/file-exists'

const projectConfig = (neatoOptions) => {
  const { projectPath } = neatoOptions
  const configPath = path.join(projectPath, 'neato.config.js')

  if (!fileExists(configPath)) {
    return neatoOptions
  }

  return Object.assign({}, neatoOptions, require(configPath))
}

