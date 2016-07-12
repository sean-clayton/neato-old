import merge from 'webpack-merge'

import library from './library'
import pages from './pages'

const archetypes = [
  library,
  pages
]

export default (neatoOptions) => (
  archetypes.reduce((webpackConfig, archetype: any) => (
    merge.smart(webpackConfig, archetype.configure(neatoOptions))
  ), {})
)
