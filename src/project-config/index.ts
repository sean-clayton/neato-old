/// <reference path="../../definitions/index.d.ts" />

import * as path from 'path'
import fileExists from '../utils/fileExists'
import _extends from '../utils/extends'

const projectConfig = (neatoOptions) => {
  const { projectPath } = neatoOptions
  const configPath = path.join(projectPath, 'neato.config.js')

  if (!fileExists(configPath)) {
    return neatoOptions
  }

  return {_extends({}, neatoOptions, require(configPath))}
}

