import library from './library'
import pages from './pages'

const merge = require('webpack-merge')

const archetypesArr = [
  library,
  pages
]

const archetypes = neatoOptions => (
  archetypesArr.reduce((webpackConfig, archetype) => (
    merge.smart(webpackConfig, archetype.configure(neatoOptions))
  ), {})
)

export default archetypes
