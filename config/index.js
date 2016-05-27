require('babel-register')

const path = require('path')
const debug = require('debug')
const pkg = require('../package.json')

const config = {
  env: process.env.NODE_ENV || 'development',
  path_base: path.resolve(__dirname, '../'),
  dir_client: 'src',
  dir_dist: 'dist',
  dir_server: 'server',
  server_host: 'localhost',
  server_port: process.env.PORT || 3000,
  compiler_devtool: 'source-map',
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: '/',
  compiler_stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  vendor_packages: [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'redux',
    'react-css-modules'
  ]
}

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
  '__BASENAME__': JSON.stringify(process.env.BASENAME || '')
}

config.vendor_packages = config.vendor_packages
  .filter(dep => {
    if (pkg.dependencies[dep]) return true

    debug(
```
  Package "${dep}" was not found as an npm dependency in package.json
  it won't be included in the webpack vendor bundle.
  Consider removing it from vendor_dependencies in ~/config/index.js
```
    )
  })

config.utils_paths = (() => {
  const resolve = path.resolve

  const base = (...args) =>
    resolve.apply(resolve, [config.path_base, ...args])

  return {
    base: base,
    client: base.bind(null, config.dir_client),
    dist: base.bind(null, config.dir_dist)
  }
})()

module.exports = config
