import path from 'path'
import cli from './cli'
import loadProjectConfig from './project-config'
import configureWebpack from './webpack'
import run from './runner'
import json from './util/json'
import fileExists from './util/file-exists'
import pipeline from './util/pipeline'

/**
 * Neato
 *
 * This function takes a single Neato options object,
 * prepare all the required Webpack / Karma configurations
 * and execute the requested action.
 *
 * @param {Object} options Neato options object
 * @param {string} options.projectPath Full path of the root directory of the project being built.
 * @param {string} options.buildTarget Target: (development, production, test).
 * @param {string} options.action Action: (develop, test, build)
 * @param {string[]} [options.javaScript.buildDependencies = true] Which dependencies to transpile (Ex: ['ui-react-components'])
 * @param {boolean} [options.hotReloading = true] Enable hot reloading
 * @param {boolean} [options.optimize = false] Optimize the output (minify, dedup...)
 * @param {boolean} [options.defineNodeEnv = true] Define and replace NODE_ENV environment in the code
 * @param {boolean} [options.clean = true] Clean the build directory
 * @param {boolean} [options.coverage = false] Outputs test coverage while running the tests
 * @param {boolean} [options.lint = true] Perform static analysis of the code through ESLint
 * @param {string[]} [options.pages = []] Define a build output based on a HTML and JS files.
 * @param {string[]} [options.disabledLoaders = []] Disables loaders for specific file types.
 * @param {Object} [options.webpack] Webpack configuration object to extend the internal configuration.
 * @param {Object} [options.karma] Karma configuration object to extend the internal configuration.
 */
const neato = (options = {}) => {
  const neatoOptions = pipeline(
    sanityCheck,
    loadProjectConfig,
    configureWebpack
  )({ ...DEFAULT_OPTIONS, ...options })

  return {
    ...neatoOptions,
    run: () => run(neatoOptions)
  }
}

/**
 * Command Line Interface
 */
neato.cli = cli

export default neato

const DEFAULT_OPTIONS = {
  port: 3000,
  neatoPath: path.join(__dirname, '../'),
  hotReloading: true,
  optimize: false,
  defineNodeEnv: true,
  clean: true,
  coverage: false,
  lint: true,
  pages: [],
  disabledLoaders: [],
  javaScript: {},
  webpack: {},
  karma: {}
}

function sanityCheck (neatoOptions) {
  const { projectPath } = neatoOptions

  const packagePath = path.join(projectPath, 'package.json')
  if (!fileExists(packagePath)) throw new MissingPackageJSON()

  const packageJSON = json.read(packagePath)
  if (packageJSON.name === 'neato') throw new NeatoPath()

  return neatoOptions
}

export function MissingPackageJSON () {
  this.name = 'MissingPackageJSON'
  this.message = 'Must be executed in target project\'s package.json path'
  this.stack = (new Error()).stack
}
MissingPackageJSON.prototype = Object.create(Error.prototype)
MissingPackageJSON.prototype.constructor = MissingPackageJSON

export function NeatoPath () {
  this.name = 'NeatoPath'
  this.message = 'Neato CLI must not be run in Neato\'s path'
  this.stack = (new Error()).stack
}
NeatoPath.prototype = Object.create(Error.prototype)
NeatoPath.prototype.constructor = NeatoPath
