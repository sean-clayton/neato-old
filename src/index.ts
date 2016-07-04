/// <reference path="../definitions/index.d.ts" />

import * as path from 'path'
import * as cli from './cli'
import * as projectConfig from './project-config'
import run from './runner'
import json from './utils/json'
import fileExists from './utils/file-exists'
import pipeline from './utils/pipeline'

// Default Options
const DEFAULT_OPTIONS: INeatoConfig = {
  port: 3000,
  neato: path.join(__dirname, '../'),
  hotReloading: true,
  optimize: false,
  defineNodeEnv: true,
  clean: true,
  coverage: false,
  lint: true
}

function sanityCheck(neatoOptions: INeato): INeato {
  const { projectPath } = neatoOptions

  const packagePath = path.join(projectPath, 'package.json')
  if (!fileExists(packagePath)) throw new MissingPackageJSONError()

  const packageJSON = json.read(packagePath)
  if (packageJSON.name === 'neato') throw new NeatoPathError()

  return neatoOptions
}

export function NeatoPathError() {
  this.name = 'NeatoPathError'
  this.message = `Neato CLI must not be run in Neato's path`
  this.stack = (new Error()).stack
}
NeatoPathError.prototype = Object.create(Error.prototype)
NeatoPathError.prototype.constructor = NeatoPathError

export function MissingPackageJSONError() {
  this.name = 'MissingPackageJson'
  this.message = `Must be executed in target project's package.json path`
  this.stack = (new Error()).stack
}
MissingPackageJSONError.prototype = Object.create(Error.prototype)
MissingPackageJSONError.prototype.constructor = MissingPackageJSONError

const neato = (options: INeatoUserConfig = {}) => {
  const neatoOptions: INeatoConfig = pipeline(
    sanityCheck,
    projectConfig
  )(Object.assign({}, DEFAULT_OPTIONS, options))
  const Neato = Object.assign({}, neatoOptions, {
    run: () => run(neatoOptions),
    cli: cli
  })
  return Neato
}

export default neato
