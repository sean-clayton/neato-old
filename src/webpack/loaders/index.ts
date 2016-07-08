import image from './image'
import javascript from './javascript'
import json from './json'
import style from './style'

const merge = require('webpack-merge')

const loadersArr = [
  image,
  javascript,
  json,
  style
]

const loaders = (neatoOptions: INeatoConfig) => {
  const disabledLoaders = neatoOptions.disabledLoaders || []

  return loadersArr.filter(loader => disabledLoaders.indexOf(loader.name) === -1)
    .reduce((webpackConfig, loader: INeatoWebpackConfig) => (
      merge.smart(webpackConfig, loader.configure(neatoOptions))
    ), {})
}

export default loaders
