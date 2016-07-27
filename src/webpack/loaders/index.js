import merge from 'webpack-merge'

import font from './font'
import image from './image'
import javaScript from './javascript'
import typescript from './typescript'
import json from './json'
import style from './style'
import video from './video'

const loaders = [
  font,
  image,
  javaScript,
  typescript,
  json,
  style,
  video
]

export default (neatoOptions) => {
  const disabledLoaders = neatoOptions.disabledLoaders || []

  return loaders.filter((loader) => disabledLoaders.indexOf(loader.name) === -1)
    .reduce((webpackConfig, loader) => (
      merge.smart(webpackConfig, loader.configure(neatoOptions))
    ), {})
}
