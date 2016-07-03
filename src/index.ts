/// <reference path="../typings/index.d.ts" />
/// <reference path="../definitions/index.d.ts" />

import path from 'path'
import cli from './cli'
import loadProjectConfig from './project-config'
import avaConfig from './ava'
import webpackConfig from './webpack'
import run from './runner'
import json from './util/json'
import fileExists from './util/file-exists'
import pipeline from './util/pipeline'

// Default Options
const DEFAULT_OPTIONS = {
  port: 3000,
  neato: path.join(__dirname, '../'),
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

const neato = (options: INeatoConfig): INeato => {
  return {
    run() {}
  }
}