import merge from 'webpack-merge'
import archetypes from './archetypes'
import presets from './presets'
import loaders from './loaders'
import splitArchetypes from './split-archetypes'
import _extends from '../util/extends'

export default (neatoOptions: any = {}) => {
  return _extends({}, neatoOptions, {
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
