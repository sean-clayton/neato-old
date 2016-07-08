import base from './base'
import clean from './clean'
import defineNodeENV from './define-node-env'
import eslint from './eslint'
import optimize from './optimize'

const merge = require('webpack-merge')

const presetsArr = [
  base,
  clean,
  defineNodeENV,
  eslint,
  optimize
]

const presets = neatoOptions => (
  presetsArr.reduce((webpackConfig, preset: INeatoWebpackConfig) => (
    merge.smart(webpackConfig, preset.configure(neatoOptions))
  ), {})
)

export default presets
