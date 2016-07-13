import merge from 'webpack-merge'

import archetypes from './archetypes'
import presets from './presets'
import loaders from './loaders'
import splitArchetypes from './split-archetypes'

export default (neatoOptions = {}) => {
  return Object.assign({}, neatoOptions, {
    webpack: splitArchetypes(neatoOptions).map(
      (neatoOptionsByArchetype) => merge.smart(
        archetypes(neatoOptionsByArchetype),
        presets(neatoOptionsByArchetype),
        loaders(neatoOptionsByArchetype),
        neatoOptions.webpack || {}
      )
    )
  })
}
